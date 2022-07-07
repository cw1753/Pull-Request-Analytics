const router = require('express').Router();

router.all('*', (req, res) => {
    res.status(404).send('Request Not Found')
});

module.exports = router;