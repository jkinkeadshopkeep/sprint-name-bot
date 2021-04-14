const { WebClient } = require('@slack/web-api');
const web = new WebClient(process.env.SLACK_TOKEN);

function postMessage (messageObj) {
  return web.chat.postMessage({
    channel: messageObj.channel,
    text: messageObj.text
  }).catch(function (err) {
    return Promise.reject(err);
  });
}

exports.postMessage = postMessage;
