'use strict';
const express = require('express');
const slackApi = require('../../services/slackapi/slackApi');
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
  slackApi.postMessage({ channel: req.body.channel_name, text: '/poll "Which days work for you for the team dinner?" "Monday" "Tuesday" "Wednesday" "Thursday" "Friday"' })
    .then(() => res.send(200));
}

module.exports = router;
