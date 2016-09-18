export const config = {
	"credentials": {
		"twitter": {
			"consumerKey": "",
			"consumerSecret": "",
			"accessToken": "",
			"accessTokenSecret": ""
		},
		"discord": {
			"token": ""
		}
	},
	// a list of twitter usernames:
	"streamTweetsFrom": [
	],
	// discord channel ID (note, not that name of the channel):
	"streamTweetsChannelID": "",
	"tradingChannelID": "",
	// path is relative to ./src/discord/:
	"profilePicture": "./avatar.jpg",
	// discord "playing" text:
	"playing": [
		"with your hearts"
	],
	// milliseconds between updates (default two hours):
	"playingUpdateTimeout": 1000 * 60 * 60 * 2
};
