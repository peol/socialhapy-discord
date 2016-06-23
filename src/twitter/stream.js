import { config } from "../config";
import { logger } from "../logger";
import { getUserIDs } from "./user-ids";

import Twit from "twit";

const TWITTER_RECONNECT_TIMEOUT = 60 * 1000;

const api = new Twit( {
	consumer_key: config.credentials.twitter.consumerKey,
	consumer_secret: config.credentials.twitter.consumerSecret,
	access_token: config.credentials.twitter.accessToken,
	access_token_secret: config.credentials.twitter.accessTokenSecret,
	timeout_ms: TWITTER_RECONNECT_TIMEOUT
} );

/**
* Starts a twitter stream, invoking the provided callback on each matched tweet.
*
* @param {Function} cb The callback to invoke on each tweet
* @returns {Promise} Eventually resolved when the stream is connected
*/
export function start( cb ) {
	return getUserIDs( api, config.streamTweetsFrom ).then( users => {
		const stream = api.stream( "statuses/filter", { follow: users } );

		stream.on( "connected", () => {
			logger.info( `Twitter stream following '${config.streamTweetsFrom}'` );
		} );

		stream.on( "tweet", tweet => {
			if ( /^RT/i.test( tweet.text ) || tweet.in_reply_to_status_id || tweet.in_reply_to_user_id ) {
				// ignore RT/replies since they're incredibly spammy:
				return;
			}
			cb( tweet );
		} );

		stream.on( "end", () => {
			logger.warn( `Twitter stream ended unexpectedly, restarting in ${TWITTER_RECONNECT_TIMEOUT / 1000}s...` );
			setTimeout( () => start( cb ), TWITTER_RECONNECT_TIMEOUT );
		} );
	} );
}
