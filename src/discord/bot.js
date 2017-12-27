import { config } from "../config";
import { logger } from "../logger";
import { extensions } from "./extensions";

import fs from "fs";
import path from "path";
import Discord from "discord.js";

// discord reconnect (default 1 min):
const RECONNECT_TIMEOUT = 1000 * 60;

/**
* Automagically find all commands in ./commands, and load their `register`
* callbacks in an array used on each message received.
*/
let commands = fs.readdirSync( path.join( __dirname, "/commands" ) ).map( file => {
	logger.info( `Loaded command: ${file}` );
	return require( path.join( __dirname, "/commands/", file ) ).register;
} );

/**
* Create a bot instance.
*
* @returns {Object} A discord.io bot instance
*/
export function create() {
	logger.debug( "Creating bot..." );

	let bot = new Discord.Client();

	Object.keys( extensions ).forEach( extension => {
		bot[extension] = extensions[extension];
	} );

	bot.on( "ready", () => {
		logger.info( "Up and running..." );
	} );

	bot.on( "message", ( msg ) => {
		logger.debug( "New message:", msg.content );
		commands.forEach( cmd => cmd( bot, msg ) );
	} );

	logger.debug( "Connecting..." );

	bot.login(config.credentials.discord.token);

	return bot;
}
