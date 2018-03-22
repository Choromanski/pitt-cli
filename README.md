# Pitt-Cli - CLI for Pitt Students

[![NPM](https://nodei.co/npm/pitt-cli.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/pitt-cli/)

[![Build Status](https://travis-ci.org/djm158/pitt-cli.svg?branch=master)](https://travis-ci.org/djm158/pitt-cli)
[![David Status](https://david-dm.org/djm158/pitt-cli.svg)](https://david-dm.org/djm158/pitt-cli)
[![npm](https://img.shields.io/npm/dt/pitt-cli.svg)](https://www.npmjs.com/package/pitt-cli)

## Installation

`[sudo] npm install -g pitt-cli` 

## Available Commands:

`pitt print [-c] path/to/file`
* send file to mobileprint@pitt.edu
	* `-c` send file to colorprint@pitt.edu

`pitt email [-cc] "recipients" ["subject"] ["body"]`
* send email to recipients
    * `-cc` prompts for recipients to cc on the email
* if no subject or body defined, user will be prompted for them
* multiple recipients must be seperated by commas ex. `pitt email "recipient1@pitt.edu, recipient2@pitt.edu" "subject" "body"`

`pitt thoth`
* connect to thoth.cs.pitt.edu via SSH


## TODO:
- [X] allow users to configure sending email to anyone
- [ ] integrate blackboard api
- [ ] integrate box api
- [ ] research any other open data pitt provides
- [ ] unit testing