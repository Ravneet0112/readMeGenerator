class MarkDown {

    static renderLicenseBadge(license) {
        const badges = {
            MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            ODbL :'[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)',
        }
        return badges[license]
    }

    static renderLicenseLink(license){
        const licenseLinks = {
            ISC: '[ISC](https://choosealicense.com/licenses/isc/)',
            MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
            Apache: '[Apache](https://choosealicense.com/licenses/apache-2.0/)',
            ODbL: '[ODbl](https://choosealicense.com/licenses/odbl-1.0/)'
        }
        return licenseLinks[license]
    }

    static renderLicenseSection(license) {
        if (license) {
            return `Licensed under the ${this.renderLicenseLink(license)} license`
        } else {
            return ''
        }
    }

    static generateReadme(answers){
        return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}

## Table of Content
- [Project Description](#Description)
- [Installation instruction](#Installation)
- [Usage](#Usage)
- [Contribution Guidelnes](#Contribution)
- [Test Instruction](#Instruction)
- [Questions](#Questions)
- [License](#License)

## Description
${answers.description}

## Installation
${answers.installation}
    
## Usage
${answers.usage}
    
## Contribution
${answers.contribution} 

## Instructions
${answers.test}
    

## Questions

GitHub: ${answers.Github}
Email: ${answers.email}

## License
${this.renderLicenseSection(answers.license)}
    `
}
}

module.exports = MarkDown
//description, installation instructions, usage information, contribution guidelines, and test instructions
