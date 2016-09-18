import { config } from "../../config";

import lowdb from "lowdb";

const db = lowdb( "./trading-rules.json" );

db.defaults( { users: [] } ).value();

export function register( bot, user, userID, channelID/*, message, rawEvent*/ ) {
	if ( channelID !== config.tradingChannelID ) {
		return;
	}

	if ( !db.get( "users" ).find( { userID } ).value() ) {
		bot.sendMessage( {
			to: userID,
			message:
`Hi! Welcome to the The Low Show trading channel. Please follow these simple rules,
or you will risk getting your message removed and/or kicked from the server.

* No trading with items/currency that is not part of the game.
* No spamming or scamming.
* Try to keep your message succinct, outline what you want and what you are willing to offer.

Tip: If you already broke these rules, you can always edit/delete your message(s).`
		} );
		db.get( "users" ).push( { userID, date: new Date() } ).value();
	}
}
