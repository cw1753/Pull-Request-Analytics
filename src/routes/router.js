const express = require('express');
const pullRequestRoutes = require('./pullRequest/pullRequest');

const router = express.Router();
router.use("/pull-request", pullRequestRoutes);

module.exports = router;