const router = require('express').Router();
const axios = require('axios');
const GetAllRepos = require('../../helper/helper')

// Get all pull request
router.get('/', (req, res) => {
    axios.get('https://api.github.com/orgs/ramda/repos').then( (response) => {
        console.log(response)
    })
    res.json({msg:'pull request'})
});

module.exports = router;