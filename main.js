var Twitter = require('twitter');

var tweet_id = '930571909254619137';

var result = {};

function get(params) {

	var client;
	switch(Math.floor( Math.random() * 6)) {
		case 0:
		client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
		break;
		case 1:
		client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
		break;
		case 2:
		client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
		break;
		case 3:
		client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
		break;
		case 4:
		client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
		break;

		default:
			client = new Twitter({
			consumer_key: '*****************',
			consumer_secret: '*****************',
			access_token_key: '*****************',
			access_token_secret: '*****************'
		});
	}


	client.get('statuses/retweets/' + tweet_id + '.json', params, function(error, tweets, response) {
		var n = 99999999999999999999;
		if (!error) {
			if (tweets.length <= 1) {
				console.log('END');
				return;
			}
			var data = tweets;
			for (var i = 1; i < data.length; i++) {
				console.log(data[i].id_str + '	' + data[i].user.screen_name + '	' + data[i].user.followers_count + '	' + data[i].user.friends_count + '	' + data[i].user.statuses_count);
				result[data[i].user.screen_name] = data[i].user.followers_count;
			}
			n = data[data.length - 1].id_str;
			var nextParams = {max_id: n,  count: '100'};
			get(nextParams);
		} else {
			console.log('error');
			console.log(tweets);
		}
	});
}

console.log('id	screen_name	followers_count	friends_count	statuses_count');
var params = {count: '100'};
get(params);
