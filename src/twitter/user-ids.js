import { logger } from "../logger";

/**
* Retrieves the actual Twitter user ID's from a list of twitter usernames.
*
* @param {Object} api The twit API instance to use
* @returns {Promise} Eventually resolved with a list of user ID's
*/
export function getUserIDs( api, listOfUsers ) {
	return new Promise( ( resolve, reject ) => {
		logger.debug( `Resolving user ID:s for ${listOfUsers}` );
		api.post(
			"users/lookup",
			{ screen_name: listOfUsers.join( "," ) },
			( err, data ) => {
				if ( err ) return reject( err );
				resolve( data.map( item => item.id_str ) );
			}
		);
	} );
}
