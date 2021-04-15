const slackEmojis = require('./data/slackEmojis.json');
const slackApi = require('../../services/slackapi/slackApi');
const bandsApi = require('../../services/externalApis/bands/bandsApi');

function createAndPostSprintNames (body) {
  return bandsApi.getBandLists(body).then((bandList) => {
    return slackApi.postMessage({ channel: body.channel_name, text: formatList(bandList) });
  });
}

function formatList (list) {
  let formattedList = 'List of possible sprint names are as follows:\n\n';
  list.forEach((listValue, index) => {
    formattedList = formattedList + `>${slackEmojis[index.toString()]} ${listValue}\n`;
  });
  return formattedList + '\n Please vote for the next sprint name by selecting the emoji beside the band name.';
}

exports.createAndPostSprintNames = createAndPostSprintNames;
