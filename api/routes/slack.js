'use strict';
const express = require('express');
const router = express.Router();
const slackService = require('../../services/slackapi/slackService');

router.post('/createPoll', createPoll);

function createPoll (req, res) {
  return slackService.createAndPostSprintNames(req.body)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500));
}

module.exports = router;
