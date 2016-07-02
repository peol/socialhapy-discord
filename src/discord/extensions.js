import { logger } from "../logger";

export const extensions = {
	mentionedIndex: function( msg ) {
		logger.debug( this, msg );
		const botMsgId = `<@${this.id}>`;
		return msg.indexOf( botMsgId );
	}
};
