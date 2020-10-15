const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
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
}

function generateReadme(answers) {
    return `
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
}

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
