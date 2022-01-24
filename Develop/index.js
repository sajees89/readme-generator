const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project Title? (Required)',
        validate: titleInput => {
            if (titleInput) {
              return true;
            }
              else {
                  console.log('Please enter your Project Title');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a detailed and informative Project Description'
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the steps and requirements for installing your application'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions, helpful tips, examples, demos and/or screenshots here'
    },
    {
        type: 'input',
        name: 'features',
        message: "Describe your project's noteworthy features (optional)"
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests for your application? If so, include them here'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators and any assets used that require attribution'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Can users contribute? Describe instuctions and guidelines for contributing to this project'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
              return true;
            }
              else {
                  console.log('Please enter your GitHub username');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            }
              else {
                console.log('Please enter your email address');
              return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license type for your repository (select one)',
        choices: [
            'GNU GPLv2' ,
            'GNU GPLv3' ,
            'MIT' ,
            'Apache-2.0' ,
            'BSD' ,
            'BSD 2' ,
            'BSD 3' ,
            'None']
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Your README has been generated! Find it in the output folder')
    });
};

function init() {
    inquirer.prompt(questions)
    .then(data => {
        const readmeData = generateMarkdown(data);
        writeToFile('./output/README.md', readmeData);
    });
};

init();