/**
* Provides a !rules command.
*
* TODO: Make this more... generic.
*
* @param {Object} A discord.io bot instance
* @param {...args} The default callback arguments from a discord.io `message` event
*/
export function register( bot, user, userID, channelID, message/*, rawEvent*/) {
	if ( message !== "!rules" ) {
		return;
	}

	bot.sendMessage( {
		to: channelID,
		message:
`This is a place to hang out and make friends. Don't fuck that up.

- Be respectful.
- Don't post NSFW stuff without warning.
- Have fun and drink beer.
- ...and no spoilers of any kind!

If you're being unnecessarily troublesome, the mods will remove you from the Discord server and \
you will not regain access, please don't make us do that!`
	} );
}
