[![License](https://img.shields.io/github/license/markdcross/readme-generator)](https://img.shields.io/github/license/markdcross/readme-generator)

# README Generator

## Description

This is a command-line application that command-line application that dynamically generates a professional README.md from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer)

## Table of Contents

1. [Installation](#Installation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributing](#Contributing)
5. [Tests](#Tests)
6. [Questions](#Questions)

## Installation

Install npm packages via `$ npm i`

## Usage

**PLEASE CLICK THE SCREENSHOT BELOW FOR A "HOW TO USE" VIDEO:**
[![Usage video](./Develop/questionsscreen.png)]("https://drive.google.com/file/d/1PzLbBhCBBa059C5wZ47n52lQlTT0woAI/preview" 'Usage video')
[Usage video]("https://drive.google.com/file/d/1PzLbBhCBBa059C5wZ47n52lQlTT0woAI/preview" 'Usage video')

**Using without BASH scripting:** Navigate to the directory with the README Generator installed, and run `node index`. Answer the questions, and move the new README file into the appropriate directory/repo.

**Using with BASH scripting:** By creating a script in your bash profile (`nano ~/.bash_profile` from the command line), you’re able to chain commands together to easily access the functionality available in the README Generator. I used `alias genrm='cd ~/projects/homework/readme-generator && node index'` to assign the command `genrm` to the task of changing to the README Gen directory and runnigg the application. Once you’ve answered the questions, simply move (`mv`) the new README to the appropriate repo/directory.

**Note:** Use this application AFTER creating your LICENSE.txt file.

## License

Licensed under the [MIT](https://github.com/markdcross/readme-generator/blob/master/LICENSE.txt) license.

## Contributing

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

#### [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)

## Tests

## Questions

Feel free to contact me with any questions or feedback:

-   GitHub: [markdcross](https://github.com/markdcross)
-   Email: <markdcross@gmail.com>
