const fs = require('fs');

const createProjectFolder = (projectName) => {
    console.log('function called: ', projectName);
    if (!fs.existsSync(projectName)) {
        fs.mkdirSync(projectName);
        console.info('projectName folder created');
    }
}


module.exports = { createProjectFolder };