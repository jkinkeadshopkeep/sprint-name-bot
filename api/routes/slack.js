'use strict';
const express = require('express');
const slackApi = require('../../services/slackapi/slackApi');
const bandsApi = require('../../services/externalApis/bands/bandsApi');
const router = express.Router();

router.get('/', healthCheck);
router.post('/help', helpCommand);
router.post('/createPoll', createPoll);

function healthCheck (req, res) {
  res.send(200);
}

function helpCommand (req, res) {
  res.send('Am helping');
}

function createPoll (req, res) {
  return bandsApi.getBandLists().then((bandList) => {
    console.log(bandList);
    slackApi.postMessage({ channel: req.body.channel_name, text: bandList })
      .then(() => res.send(200));
  });
}

module.exports = router;
