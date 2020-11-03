// Declare variables and package dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateReadme = require('./generateReadme');

// Promisify the writeFile function
const writeFileAsync = util.promisify(fs.writeFile);

// Use Inquirer to gather info from user
const promptUser = () =>
    inquirer.prompt([
        {
            type: 'input',
            name: 'ghUser',
            message: 'What is your GitHub username?',
            default: 'markdcross',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is the name of the repo?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
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
            default: 'Install NPM Packages via `$ npm i`',
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
            message: 'Please provide usage information',
        },
        {
            type: 'input',
            name: 'contribution',
            message:
                'Please provide contribution guidelines (Contributor Covenant included by default)',
        },
        {
            type: 'list',
            name: 'license',
            message:
                'What license are you using (please create a LICENSE.txt file prior to generating your README)',
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
            name: 'test',
            message: 'Please provide instructions for testing',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            default: 'markdcross@gmail.com',
        },
    ]);

async function init() {
    console.log('Welcome to the README generator!');
    try {
        const answers = await promptUser();

        const newReadme = generateReadme(answers);

        await writeFileAsync(`${answers.repo}README.md`, newReadme);

        console.log('Successfully created README');
    } catch (err) {
        console.log(err);
    }
}

init();
