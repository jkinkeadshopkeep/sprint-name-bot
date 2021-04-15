const slackEmojis = require('./data/slackEmojis.json');
const slackApi = require('../../services/slackapi/slackApi');
const bandsApi = require('../../services/externalApis/bands/bandsApi');

function createAndPostSprintNames (body) {
  const urlParams = body.text.split(' ');
  return fetchApiTopicList(urlParams).then((sprintNameList) => {
    return slackApi.postMessage({ channel: body.channel_name, text: sprintNameList });
  });
}

function fetchApiTopicList (urlParams) {
  switch (urlParams[0]) {
    case 'Bands':
      return bandsApi.getBandLists(urlParams).then((bandList) => formatList(bandList));
    case 'Superheros':
      return Promise.resolve('Superhero list');
    default:
      return bandsApi.getBandLists(urlParams).then((bandList) => formatList(bandList));
  }
}

function formatList (list) {
  list = list.filter(function (value) {
    return value != null;
  });

  if (list.length > 0) {
    let formattedList = 'List of possible sprint names are as follows:\n\n';
    list.forEach((listValue, index) => {
      formattedList = formattedList + `>${slackEmojis[index.toString()]} ${listValue}\n`;
    });
    return formattedList + '\n Please vote for the next sprint name by selecting the emoji beside name choice.';
  }
  return 'A list could not be generated with the parameters passed :skull:';
}

exports.createAndPostSprintNames = createAndPostSprintNames;
