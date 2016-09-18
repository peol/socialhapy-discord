const responses = [
	"What can I do for you?",
	"You rang?",
	"I'm busy, stop disturbing me.",
	"I don't understand.",
	"No, you are.",
	"I wouldn't know.",
	"These highlights are killing me."
];

const answers = [
	"What do you think?",
	"I wouldn't know.",
	"Ask me another time.",
	"Yes.",
	"Never.",
	"Of course.",
	"Can we do this another time?",
	"I'd love to answer but this is a bad time for me."
];

/**
* Provides a trigger when the bot is mentioned, which responds with a random message
* depending on if the bot was simply tagged or if it was a question.
*
* @param {Object} A discord.io bot instance
* @param {...args} The default callback arguments from a discord.io `message` event
*/
export function register( bot, user, userID, channelID, message/*, rawEvent*/ ) {
	const idx = bot.mentionedIndex( message );
	const isQuestion = message.slice( -1 ) === "?";

	if ( idx === -1 ) {
		return;
	}

	const rnd = Math.random();
	let msg = null;

	if ( idx === 0 && isQuestion ) {
		msg = answers[Math.floor(rnd * answers.length)];
	} else {
		msg = responses[Math.floor(rnd * responses.length)];
	}

	bot.sendMessage( {
		to: channelID,
		message: `<@${userID}>: ${msg}`
	} );
}
