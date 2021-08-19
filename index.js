const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt ([
    {
      type: 'input',
      name: 'title',
      message: 'Title of Repo',
    },
    {
      type: 'input',
      message: 'Description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation Instructions',
      name: 'install',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Usage Info',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Contribution Info',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Test Instructions',
      },
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'license',
        choices: ['MIT', 'GNU', 'NONE' ],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Github Page',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email Address ',
      },
      
  ]) 

  ;k
 