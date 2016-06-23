import winston from "winston";

const levels = {
	trace: 0,
	input: 1,
	verbose: 2,
	prompt: 3,
	debug: 4,
	info: 5,
	data: 6,
	help: 7,
	warn: 8,
	error: 9
};

const colors = {
	trace: "magenta",
	input: "grey",
	verbose: "cyan",
	prompt: "grey",
	debug: "blue",
	info: "green",
	data: "grey",
	help: "cyan",
	warn: "yellow",
	error: "red"
};

export const logger = new ( winston.Logger )( {
	transports: [
		new ( winston.transports.Console )( {
			colorize: true,
			timestamp: true
		} )
	],
	levels: levels,
	colors: colors
} );
