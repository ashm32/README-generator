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
//answers
  .then((answers) => {
    const readmeContent = `
# ${answers.title}

${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## Contributing

${answers.contribution}

## Tests

${answers.test}

## Questions

For any questions or inquiries, feel free to reach out to me:

GitHub: [${answers.username}](https://github.com/${answers.username})

Email: ${answers.email}
`;
 
