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
A fighter that size couldn't get this deep into space on its own. Well, he ain't going to be around long enough to tell anyone about us. Look at him. He's headed for that small moon. I think I can get him before he gets there...he's almost in range. That's no moon! It's a space station. It's too big to be a space station. I have a very bad feeling about this. Yeah, I think your right. Full reverse! Chewie, lock in the auxiliary power. Why are we still moving towards it? We're caught in a tractor beam! It's pulling us in! But there's gotta be something you can do! There's nothin' I can do about it, kid. I'm in full power. I'm going to have to shut down. But they're not going to get me without a fight! You can't win. But there are alternatives to fighting.
## Usage
A fighter that size couldn't get this deep into space on its own. Well, he ain't going to be around long enough to tell anyone about us. Look at him. He's headed for that small moon. I think I can get him before he gets there...he's almost in range. That's no moon! It's a space station. It's too big to be a space station. I have a very bad feeling about this. Yeah, I think your right. Full reverse! Chewie, lock in the auxiliary power. Why are we still moving towards it? We're caught in a tractor beam! It's pulling us in! But there's gotta be something you can do! There's nothin' I can do about it, kid. I'm in full power. I'm going to have to shut down. But they're not going to get me without a fight! You can't win. But there are alternatives to fighting.
## License
## Contributing
A fighter that size couldn't get this deep into space on its own. Well, he ain't going to be around long enough to tell anyone about us. Look at him. He's headed for that small moon. I think I can get him before he gets there...he's almost in range. That's no moon! It's a space station. It's too big to be a space station. I have a very bad feeling about this. Yeah, I think your right. Full reverse! Chewie, lock in the auxiliary power. Why are we still moving towards it? We're caught in a tractor beam! It's pulling us in! But there's gotta be something you can do! There's nothin' I can do about it, kid. I'm in full power. I'm going to have to shut down. But they're not going to get me without a fight! You can't win. But there are alternatives to fighting.
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
