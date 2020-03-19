[![Build Status](https://travis-ci.org/anyatibrian/easy-router.svg?branch=develop)](https://travis-ci.org/anyatibrian/easy-router)
[![Coverage Status](https://coveralls.io/repos/github/anyatibrian/easy-router/badge.svg?branch=develop)](https://coveralls.io/github/anyatibrian/easy-router?branch=develop)

# Easy-Router
This is react-native app that consumes the [OpenCage](https://opencagedata.com/) Api enable enables users to find routes to different places
depending on the [graphhopper](https://www.graphhopper.com/) routing api

### Dependencies and packages 
* React Native
* opencagedata API
* Graphhopper Api
* jest and enzymes
### Setup
* `git clone https://github.com/anyatibrian/easy-router.git`
* `cd easy-router`
* Run yarn install to add dependencies
* create a .env file and copy examples from env-example.text

### set up open cage and graphhoper
go to open cage and graphhoper in the links given above and create your API keys and then copy and pass them 
in the .env file following examples from env-example.text and you will be good to go

### to run test locally
run ` yarn test`
### to run the app locally
run ` react-native run-android `
