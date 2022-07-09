const router = require('express').Router();
const axios = require('axios');
const helper = require('../../helper/helper');
const helperFunc = require('../../helper/helpFunc');
const fs = require('fs');
const { json } = require('express');


// Get pull request count
router.get('/count', async (req, res) => {
    // If there is data in json file, can just send data from there. This will save limited request to Github
    if (fs.existsSync(`./src/json/pullRequest.json`)) {
        data = JSON.parse(fs.readFileSync(`./src/json/pullRequest.json`))

        res.json({ total_pull_request: data['total_count'] })
    } else {
        await axios.get(helper.GetPullRequestCount).then((response) => {
            fs.writeFileSync(`./src/json/pullRequest.json`, JSON.stringify(response.data))
            res.json({ total_pull_request: response.data['total_count'] })
        }).catch((err) => {
            res.status(500).send(err)
        })
    }
});

// Get open pull request by repo
router.get('/by-repo', async (req, res) => {
    try {
        // Get all repo name
        let repoList = []
        // If there is data in json file, can just send data from there. This will save limited request to Github
        if (fs.existsSync(`./src/json/repoList.json`)) {
            repoList = JSON.parse(fs.readFileSync(`./src/json/repoList.json`))
        } else {
            await axios.get(helper.GetAllRepos).then( (response) => {
                response.data.forEach(repo => {
                    repoList.push(repo.name)
                });
                fs.writeFileSync(`./src/json/repoList.json`, JSON.stringify(repoList))
            }).catch( (err) => {
                throw err
            })
        }

        repoList.map((repoName) => {
            helperFunc.pullRequestByRepo(repoName);
        });

        res.json(repoList)
    } catch (error) {
        res.status(500).send(error)
    }

});


module.exports = router;