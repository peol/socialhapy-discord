import { config } from "./config";
import { start } from "./twitter/stream";
import { create } from "./discord/bot";
import { logger } from "./logger";

const bot = create();

if ( config.streamTweetsFrom.length ) {
	start( tweet => {
		logger.info( "New tweet:", tweet );
		const channel = bot.channels[config.streamTweetsChannelID];
		channel.send(
			`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
		);
	} );
}
