function generateReadme(answers) {
    return `
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
Licensed under the [${answers.license}](https://github.com/${answers.ghUser}/${answers.repo}/blob/master/LICENSE.txt) license.
## Contributing
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

#### [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/)

## Tests
## Questions
`;
}
module.exports = generateReadme;
