#!/usr/bin/env node
console.log('Hello, world!');

const { createProjectFolder } = require('./src/main');

const program = require('commander');
program
.command('init <projectName>')
.alias('i')
.description('create s simple structure folder')
.action((projectName) => {
    createProjectFolder(projectName);
});


program.parse(process.argv);