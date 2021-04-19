'use strict';
const express = require('express');
const router = express.Router();
const slackService = require('../../services/slackapi/slackService');

router.post('/createPoll', createPoll);

function createPoll (req, res) {
  return slackService.createAndPostSprintNames(req.body)
    .then(() => res.status(200).send(':musical_note:'))
    .catch((err) => res.status(500).send(err.message));
}

module.exports = router;
