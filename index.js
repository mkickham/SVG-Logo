// Here I set some constant variables and included inquirer
const inquirer = require('inquirer');
const logo = require('./logo');

// Here I set up my main function which contains an inquirer prompt which asks the user some questions related to what type of shape they want
function main() {
    inquirer.prompt([
        {
            name: 'text',
            message: 'Enter up 3 characters'
        },
        {
            name: 'color',
            message: 'Enter a color for your text'
        },
        {
            name: 'shapes',
            type: 'list',
            message: 'Choose a shape',
            choices: ['circle', 'square', 'triangle']
        },
        {
            name: 'ShapeColor',
            message: 'Enter a color for your shape'
        }
    ])

// Here I set up a .then function which takes the answers provided from the prompt and attaches parameters like color, shape, etc. to consider
.then(answer => {
    console.log(answer)
    logo(answer.text, answer.color, answer.shapes, answer.ShapeColor);
    
    console.log("Generated a SVG Logo");
})

// I added this catch error function in case there are any errors that occur
.catch(error => {
    console.error("An error occured, please try again", error)
})
}
main();