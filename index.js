#!/usr/bin/env node

const { mdLinks } = require('./src/mdLinks');
const { stadistics } = require('./src/stadistics');

const validate = process.argv.some((value) => value === '--validate');
const stats = process.argv.some((value) => value === '--stats');

console.log(process.argv);

mdLinks(process.argv[2], { validate })
  .then((links) => {
    if (stats) {
      console.log(stadistics(links, validate));
    } else {
      console.log(links);
    }
  }).catch((err) => console.error(err.message));
