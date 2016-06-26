import { config } from "../config";
import { logger } from "../logger";

import fs from "fs";
import path from "path";
import Discord from "discord.io";

/**
* Automagically find all commands in ./commands, and load their `register`
* callbacks in an array used on each message received.
*/
let commands = fs.readdirSync( path.join( __dirname, "/commands" ) ).map( file => {
	logger.info( `Loaded command: ${file}` );
	return require( path.join( __dirname, "/commands/", file ) ).register;
} );

/**
* Updates the bot with a random "Playing" status.
*/
function updatePlayingStatus( bot ) {
	const playing = config.playing[Math.floor( Math.random() * config.playing.length )];

	bot.setPresence( {
		game: playing
	} );

	logger.debug( `Updated playing status to: 'Playing ${playing}'` );

	setTimeout( () => updatePlayingStatus( bot ), config.playingUpdateTimeout );
}

/**
* Create a bot instance.
*
* @returns {Object} A discord.io bot instance
*/
export function create() {
	const bot = new Discord.Client( {
		token: config.credentials.discord.token,
		autorun: true
	} );

	bot.on( "ready", () => {
		bot.editUserInfo( {
			avatar: fs.readFileSync( path.join( __dirname, "../../resources/", config.profilePicture ), "base64" )
		} );

		updatePlayingStatus( bot );

		logger.info( "Up and running..." );
	} );

	bot.on( "disconnected", () => {
		logger.warn( "Disconnected from discord..." );
		// we kill the process here to avoid any event registration build up
		// (in discord.io lib):
		process.exit();
	} );

	bot.on( "message", ( ...args ) => {
		commands.forEach( cmd => cmd( bot, ...args ) );
	} );
}
