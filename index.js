const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

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
    ]);

const generateReadme = (answers) =>
    `
[![License](https://img.shields.io/github/license/${answers.ghUser}/${answers.repo})](https://img.shields.io/github/license/${answers.ghUser}/${answers.repo})
# ${answers.title} 
# Description
${answers.description}
# Table of Contents
# Installation
# Usage
# License
# Contributing
# Tests
# Questions
`;

async function init() {
    console.log('Welcome to the README generator!');
    try {
        const answers = await promptUser();

        const newReadme = generateReadme(answers);

        await writeFileAsync('README.md', newReadme);

        console.log('Successfully created README');
    } catch (err) {
        console.log(err);
    }
}

init();
