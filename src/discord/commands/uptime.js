import Duration from "duration";

const started = new Date();

/**
* Provides an !uptime command that outputs how long the bot has been online.
*
* @param {Object} A discord.io bot instance
* @param {...args} The default callback arguments from a discord.io `message` event
*/
export function register( bot, message ) {
	if ( message.content !== "!uptime" ) {
		return;
	}

	message.reply( `I've been up for ${new Duration( started, new Date() ).toString( 1, 1 )}` );
}
