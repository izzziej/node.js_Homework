const inquirer = require('inquirer');
const fs = require('fs');

function writeUp(fileBody){
    fs.writeFile(" readme.txt ", fileBody , (err) => { 
        err? console.log (err) : console.log ("Write Up Complete")})
}

;
inquirer.prompt ([
    {
      type: 'input',
      name: 'title',
      message: 'Title of Repo:',
    },
    {
      type: 'input',
      message: 'Description:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation Instructions:',
      name: 'install',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage Info:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Contribution Info:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Test Instructions:',
      },
      {
        type: 'list',
        message: 'Licence:',
        name: 'license',
        choices: ['MIT', 'GNU', 'NONE' ],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Github Page:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email Address: ',
      },

])
  .then ((responseObj) => {
    console.log(responseObj);
    let fileBody = `
    ${responseObj.title} 
    "Description: " ${responseObj.description}

    "Installation Instructions: "${responseObj.install} 

    "License: " ${responseObj.license}

    "Usage: " ${responseObj.usage}

    "Contribution: "${responseObj.contribution} 

    "Test Instructions: " ${responseObj.test}

    "Git Hub Page:" ${responseObj.github} 
    
    "Email Me At: "${responseObj.email}
    `; 
    
    writeUp(fileBody);

    });


   
  
