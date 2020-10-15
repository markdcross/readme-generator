// Declare variables and package dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadme = require('./Develop/generateReadme');

// Promisify the writeFile function
const writeFileAsync = util.promisify(fs.writeFile);

// Use Inquirer to gather info from user
const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'ghUser',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is the name of the repo?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief description.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions?',
            default: 'npm i',
        },
        {
            type: 'input',
            name: 'screenshot',
            message:
                'Please provide the relative path for at least one screenshot',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide clear and concise usage information',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to use?',
            choices: [
                'MIT',
                'GNU General Public License v3.0',
                'Apache License 2.0',
                'Creative Commons Zero v1.0 Universal',
                'Mozilla Public License 2.0',
                'The Unilicense',
                'Other',
            ],
            default: 0,
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ]);

async function init() {
    console.log('Welcome to the README generator!');
    try {
        const answers = await promptUser();

        const newReadme = generateReadme(answers);

        await writeFileAsync('newREADME.md', newReadme);

        console.log('Successfully created README');
    } catch (err) {
        console.log(err);
    }
}

init();
