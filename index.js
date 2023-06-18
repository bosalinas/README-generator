// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation?',
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'project',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'problem',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'learn',
        },
        {  
            type: 'list',
            message: 'Which license would you like?',
            name: 'license',
            choices: ['mit', 'apache', 'None'],
        }
    ])
    .then((answers) => {
        //* How to include a .md rather than HTML
        

        fs.writeFile("README.md", `
![License](# https://img.shields.io/badge/you_ok-${answers.license}-blue)
# Table of Contents
[License](#${answers.license})
[License](#${answers.license})

# ${answers.title}
## ${answers.motivation}
## ${answers.license}

        `, (err) =>
            err ? console.log(err) : console.log('Created README File!')
        );
    });



// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();

//
