// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const MarkDown = require('./Readme');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [


    {
        type: 'input',
        name: 'title',
        message: 'What is name of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of the project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are some instrctions for the intallation?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are some contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are some test instructions',
    },
    {

        type: 'checkbox',
        message: 'What is the license you are going to use?',
        name: 'license',
        choices: ['MIT', 'Apache', 'ISC', 'ODbL'],
    },

    {
        type: 'input',
        name: 'Github',
        message: 'Enter your GitHub Username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    }

]

function runQuery() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const mark = MarkDown.generateReadme(answers)
            fs.writeFile('README.md', mark, function (err){
                if (err){
                    console.log('Could not save file')
                }
                else{
                    console.log('Success: Readme file generated')
                }
            })
           
        })
        .catch((error) => {
            console.log(error)
        })
}

runQuery()

// TODO: Create a function to write README file
//function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
//function init() { }

// Function call to initialize app
//init();
