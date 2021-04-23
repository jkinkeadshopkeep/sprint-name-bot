const slackEmojis = require('./data/slackEmojis.json');
const slackWebApi = require('./slackWebApi');
const bandsApi = require('../../services/externalApis/bands/bandsApi');

function createAndPostSprintNames (body) {
  const urlParams = body.text.split(' ');
  return fetchApiTopicList(urlParams).then((sprintNameList) => {
    return slackWebApi.postMessage({ channel: body.channel_name, text: sprintNameList });
  });
}

function fetchApiTopicList (urlParams) {
  urlParams[0].toLowerCase();
  switch (urlParams[0]) {
    case 'bands':
      return bandsApi.getBandLists(urlParams).then((bandList) => formatList(bandList));
    case 'superheros':
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
    return formattedList + '\n Please vote for the next sprint name by selecting the appropriate choice.';
  }
  return 'A list could not be generated with the parameters passed :skull:';
}

exports.createAndPostSprintNames = createAndPostSprintNames;
