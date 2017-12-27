/**
* Provides a trigger with a chance of responding "nice nice nice..." if
* the message contained the word "nice".
*
* @param {Object} A discord.io bot instance
* @param {...args} The default callback arguments from a discord.io `message` event
*/

const cap = 0.70;

export function register( bot, message ) {
	if ( message.content.toLowerCase().replace( /[^\w\s]+/g, "" ).split( " " ).indexOf( "nice" ) === -1 ) {
		return;
	}

	const rnd = Math.random();

	if ( rnd > cap ) {
		message.channel.send( "nice nice nice nice nice!" );
	}
}
