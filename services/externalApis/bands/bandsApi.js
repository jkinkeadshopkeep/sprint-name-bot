const fetch = require('node-fetch');

function getBandLists (body) {
  const urlParams = body.text.split(' ');
  const searchParam = checkForParam(urlParams[0]);

  return fetch(`https://musicbrainz.org/ws/2/artist?query=artist:${searchParam}* AND type:group&limit=100&offset=0&fmt=json`).then((res) => {
    return res.json().then((list) => {
      return selectRandomItemsFromArray(filterArrayList(list, searchParam), urlParams[1]);
    });
  }).catch((err) => {
    return err;
  });
}

function checkForParam (searchParam) {
  return !searchParam ? ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')[(Math.floor(Math.random() * 26))] : searchParam;
}

function filterArrayList (list, searchParam) {
  return list.artists.map((artist) => artist.name).filter((artist) => artist[0] === searchParam);
}

function selectRandomItemsFromArray (list, listSizeParam) {
  const listSizeParamToInt = listSizeParam ? parseInt(listSizeParam) - 1 : 4;
  const listSize = (listSizeParamToInt > 9) ? 5 : listSizeParamToInt;
  const randomList = [];

  for (let i = 0; i <= listSize; i++) {
    randomList.push(list[Math.floor(Math.random() * list.length)]);
  }
  return randomList;
}

exports.getBandLists = getBandLists;
