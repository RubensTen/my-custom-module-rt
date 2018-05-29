'use strict';
const fs = require('fs');

const createFolder = (folderName) => {
    try {
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
        }
        return true;
    } catch (error) {
        return false;        
    }
};

const createFile = (file, content) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(file, content, (err) => {
            if (err) {
                reject(err);
            }else {
                resolve(true);
            }
        });
    });
};


const moduleTemplate = (moduleName) => {
    return `
'use strict';
import { ExampleImport } from './exampleImport';
class ${moduleName} {
    constructor(){
    }
}
export { ${moduleName} };
    `
};


const gitIgnore = 
`node_modules
lib
*.log`;
const sourceCode = 'src';
const modulesFolder = 'modules';



const createFolders = (projectName) => {
    if (createFolder(projectName) &&
        createFolder(projectName + '/' + sourceCode) && 
        createFolder(projectName + '/' + sourceCode + '/' + modulesFolder)
    ) {
        return true;
    }
    return false;
};

const createGitIgnore = (projectName) => {
    createFile(projectName + '/.gitignore', gitIgnore)
    .then((success) => {
        console.log('Git ignore created');
    }).catch((error) => {
        console.error('Error to create gitignore: ', error);
    });
}

const createDefaultModule = (pathModule, moduleName)=> {
    createFile(`${pathModule}.js`, moduleTemplate(moduleName))
    .then((success) => {
        console.info('Module created');
    })
    .catch(error => {
        console.error('Error to create a default module');
    });
};

const init = (projectName) => {
    // create folder of project
    if (createFolders(projectName)) {
        // create gitignore
        createGitIgnore(projectName);
        // create a default module template
        const defaultModule = `${projectName}/${sourceCode}/${modulesFolder}/default`;
        createDefaultModule(defaultModule, 'Default');
    }else {
        console.error('Error to create folder of project');
    }
};


module.exports = { init };