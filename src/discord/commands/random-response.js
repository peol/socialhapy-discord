import fs from "fs";
import path from "path";

const responsesFile = path.join( __dirname, "../../../resources/", "/responses.txt" );

/**
* Provides a trigger with a chance of responding with a random line from `responses.txt`.
*
* @param {Object} A discord.io bot instance
* @param {...args} The default callback arguments from a discord.io `message` event
*/
export function register( bot, user, userID, channelID/*, message, rawEvent*/ ) {
	/*eslint no-constant-condition:0*/
	if ( true ) {
		// disabled for now, need to do something funnier and less annoying:
		return;
	}

	const rnd = Math.random();
	const responses = fs.readFileSync( responsesFile ).toString().split( "\n" );


	if ( rnd > 0.98 ) {
		const msg = responses[Math.floor(Math.random() * responses.length)];
		bot.sendMessage( {
			to: channelID,
			message: msg
		} );
	}
}
