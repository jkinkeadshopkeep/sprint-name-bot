const fetch = require('node-fetch');

function getBandLists () {
  const BAND_LETTER = 'Z';
  const URL = `https://musicbrainz.org/ws/2/artist?query=artist:${BAND_LETTER}*&limit=20&offset=0&fmt=json`;

  return fetch(URL).then((res) => {
    return res.json().then((list) => {
      return list.artists.map((artist) => artist.name).filter((artist) => artist[0] === BAND_LETTER);
    });
  });
}

exports.getBandLists = getBandLists;
