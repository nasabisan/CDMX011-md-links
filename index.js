#!/usr/bin/env node

const inquirer = require('inquirer');
const path = require('path');
const getfiles = require('./getfiles');
const file = require('./archive');
const urls = require('./urls');
const chalk = require('chalk');
const route = process.cwd();

inquirer.prompt([{
  type: 'rawlist',
  name: 'path',
  itemType: '',
  message: chalk.yellow ('Select a file .md to check URL status'),
  choices: getfiles.browseDirectories(route),
}])
  .then(currentFile => {
    console.log('Name of analyzing file: ' + currentFile.path);
    const join = path.join(route, currentFile.path);
    const allUrl = file.getRoute(join);

    allUrl.forEach((url,i) => { if (urls.validateUrl(allUrl[i])) {
      console.log(allUrl)
    }})
  })
  .catch(error => {
    console.log(error);
  });