// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const licenses = ['MIT', 'Apache 2.0', 'FreeBSD', 'Modified BSD']

// array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Welcome to the interactive README generator! Please answer the following questions to create\n'
      + 'your custom README! Press Ctrl+C to quit at any time.\n\n'
      + 'What is your GitHub username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'Please enter a title for your project.',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please enter a description for your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please enter installation instructions.',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please enter usage information.',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Please enter contribution guidelines.',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Please enter testing instructions.',
    name: 'testing',
  },
  {
    type: 'list',
    message: 'Please select a license.',
    name: 'license',
    choices: licenses
  }

];

// writes README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (error) => {
    if (error) {
      console.log('Error: ' + error);
    } else {
      console.log('myREADME.md generated!');
    }
  });
}

// function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
        writeToFile('myREADME.md', answers);
      })
    .catch(error => {
      console.log('Error: ' + error);
    });
}

// Function call to initialize app
init();
