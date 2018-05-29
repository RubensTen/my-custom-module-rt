#!/usr/bin/env node
console.log('Start to create application');

const { init } = require('./src/main');

const program = require('commander');
program
.command('init <projectName>')
.alias('i')
.description('create a simple structure folder')
.action((projectName) => {
    init(projectName);
});


program.parse(process.argv);