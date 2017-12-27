import tz from "timezone/loaded";

/**
* Provides a !time command that outputs the current time in a range of different
* timezones.
*
* TODO: Make this more... configurable.
*
* @param {Object} A discord.io bot instance
* @param {...args} The default callback arguments from a discord.io `message` event
*/
export function register( bot, message ) {
	if ( message.content !== "!time" ) {
		return;
	}

	const date = new Date();

	message.channel.send(
`Pacific: ${tz(date, "%c", "en_US", "America/Los_Angeles")}
Mountain: ${tz(date, "%c", "en_US", "America/Denver")}
Central: ${tz(date, "%c", "en_US", "America/Chicago")}
Eastern: ${tz(date, "%c", "en_US", "America/New_York")}
London: ${tz(date, "%c", "en_US", "Europe/London")}
Copenhagen/Stockholm/Berlin: ${tz(date, "%c", "en_US", "Europe/Copenhagen")}`
	);
}
