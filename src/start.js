import { config } from "./config";
import { start } from "./twitter/stream";
import { create } from "./discord/bot";
import { logger } from "./logger";

const bot = create();

start( tweet => {
	logger.info( "New tweet:", tweet );
	bot.sendMessage( {
		to: config.streamTweetsChannelID,
		message: `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
	} );
} );
