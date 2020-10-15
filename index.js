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
### Description
${answers.description}
## Table of Contents
1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)
## Installation
## Usage
## License
## Contributing
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

#### [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)

## Tests
## Questions
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
