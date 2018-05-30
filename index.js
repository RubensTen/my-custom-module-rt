#!/usr/bin/env node
const { init, makeModule } = require('./src/main');

const program = require('commander');
program
.command('init <projectName>')
.alias('i')
.description('create a simple structure folder')
.action((projectName) => {
    init(projectName);
});

program
.command('module <moduleName>')
.alias('m')
.description('create a simple module')
.action((moduleName) => {
    makeModule(moduleName);
});

program.parse(process.argv);