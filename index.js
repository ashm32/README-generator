//  required packages (Run ' npm install ' to install the necessary dependencies (in this case, inquirer).)
const fs = require('fs');
const inquirer = require('inquirer');


//user input prompts
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project: ',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a short description of your project: ',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions: ',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage instructions: ',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter any contribution guidelines: ',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter test instructions: ',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username: ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address: ',
    },
  ])

 
