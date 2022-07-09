# Pull-Request-Analytics

A tool to analyze pull request traffic for a Github organization.

Retrieve every pull request for the Ramda organization using the Github web API and store the results in memory.

### Here are some resources:

Ramda organization: https://github.com/ramda 

Github API docs: https://developer.github.com/v3/  

## Features
A simple api build with express.js. It gets the total number of pull request for an organization in Github.

## From the repo:
1. clone this project locally
2. Run `npm install` in your bash /command line
3. Need to create an .env file for your Github host URL and organization

        HOST_URL =  https://api.github.com
        GIT_ORG = yourOrg
        GIT_TOKEN = 'your-git-auth-token'
4. Run `npm start` in your bash /command line to start the server

    You can use nodemon, if installed, for automatic restarting in development environment

        nodemon

# REST API

## Pull Request Request

### Get total pull request count for an organization:

`GET /api/pull-request/count`
#### Respond

    {
        "total_pull_request": 2043
    }


### Get server to loop through and save all Github pull requests data into json files by repo:

`GET /api/pull-request/by-repo`
#### Respond

    [
        "ramda",
        "ramdangular"
    ]