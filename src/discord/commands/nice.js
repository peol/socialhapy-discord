/**
* Provides a trigger with a chance of responding "nice nice nice..." if
* the message contained the word "nice".
*
* @param {Object} A discord.io bot instance
* @param {...args} The default callback arguments from a discord.io `message` event
*/
export function register( bot, user, userID, channelID, message/*, rawEvent*/ ) {
	if ( message.toLowerCase().replace( /[^\w\s]+/g, "" ).split( " " ).indexOf( "nice" ) === -1 ) {
		return;
	}

	const rnd = Math.random();

	if ( rnd > 0.70 ) {
		bot.sendMessage( {
			to: channelID,
			message: "nice nice nice nice nice!"
		} );
	}
}
