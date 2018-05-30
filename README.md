# Practice 3 : Custom NPM Module (Centraal Academy)

## Install from NPM repository
    npm install -g my-custom-module-rt
    
## After install run init to create a single app
    snippet init <my-app>

## Create a single module
    snippet module <module-name>

This command create a single module inside folder src


## Use Module after cloned from Git

In root directory of module execute this to install how global module and after you can use this module with the 
command "snippet"
    
    npm install -g
    snippet init <name-of-app>

## Run command inside a source code of module
    node index.js init <projectName>
