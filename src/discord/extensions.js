export const extensions = {
	/**
	* Checks if the bot was mentioned in a message, and returns the position in
	* the message if so.
	*
	* @returns {Number} the index/position where the bot was mentioned (-1 if it wasn't)
	*/
	mentionedIndex: function( msg ) {
		const botMsgId = `<@${this.id}>`;
		return msg.indexOf( botMsgId );
	}
};
