const axios = require('axios');
const fs = require('fs');
const { json } = require('express');
const helper = require('./helper');
require('dotenv').config();

exports.pullRequestByRepo = async (repoName) => {
    let pageNum = 1;
    let jsonObj = []
    while (pageNum != 0) {
        await axios.get(`${helper.GetPullRequest}/${repoName}/pulls`,
            {
                headers: { Authorization: `Bearer ${process.env.GIT_TOKEN}` },
                params: { state: 'all', per_page: 100, page: pageNum }
            }).then((response) => {
                console.log(repoName + pageNum)

                if (response.data.length == 0) {
                    pageNum = 0
                } else {
                    jsonObj.push(...response.data)
                    pageNum++
                }

            }).catch((err) => {
                console.log(`Error: ${err}`)
                // throw err
            })
    }

    const data = JSON.stringify(jsonObj)
    fs.writeFile(`./src/json/${repoName}.json`, data, (err) => { if (err) { throw err } })
};