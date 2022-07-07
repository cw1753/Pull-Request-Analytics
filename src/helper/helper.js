require('dotenv').config();

exports.GetAllRepos = `${process.env.HOST_URL}/orgs/${process.env.GIT_ORG}/repos`

exports.GetPullRequest = `${process.env.HOST_URL}/repos/${process.env.GIT_ORG}`

exports.GetPullRequestCount = `${process.env.HOST_URL}/search/issues?q=%20is:pr%20org:${process.env.GIT_ORG}&per_page=100`