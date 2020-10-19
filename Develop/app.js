const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const question = require("./lib/question");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let id = 0;
const roster = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function promptUser() {
    return prompt.inquirer (question)
} 

async function init () {
    try {
        resOne = await promptUser(response);
        let resTwo = '';
        if (response.role === 'engineer') {
            resTwo = await prompt.inquirer (
                [{type: 'input',
                name: 'gitHubName',
                message: 'What is the employees GitHub username?',
                validate: answer => {
                    if (answer !== 'string' || typeof answer == ' ') {
                        console.log("please enter a valid answer");
                        return false;}
                    else {
                        return true;}
                    }
                }]
            )
            ++id;
            const newEngineer = new Engineer (resOne.name, id, resOne.email, resTwo.gitHubName);
            console.log(newEngineer);
            roster.push(newEngineer);
        }
        else if (response.role === 'intern') {
            resTwo = await prompt.inquirer (
                [{type: 'input',
                name: 'schoolName',
                message: 'What is the name of the school intern is attending?',
                validate: answer => {
                    if (answer !== 'string' || typeof answer == ' ') {
                        console.log("please enter a valid answer");
                        return false;}
                    else {
                        return true;}
                    }
                }]
            )
            ++id;
            const newIntern = new Intern (resOne.name, id, resOne.email, resTwo.schoolName);
            console.log(newIntern);
            roster.push(newIntern);
        }
        else if (response.role === 'manager') {
            resTwo = await prompt.inquirer (
                [{type: 'input',
                name: 'officeNumber',
                message: 'What is the employee office number?',
                validate: answer => {
                    if (answer !== 'number' || typeof answer == ' ') {
                        console.log("please enter a valid email");
                        return false;}
                    else {
                        return true;}
                    }
                }]
            )
            ++id;
            const newManager = new Manager (resOne.name, id, resOne.email, resTwo.officeNumber);
            console.log(newManager);
            roster.push(newManager);
        }
    }
    catch (err) {
        return console.log(err);
    }
    console.log(roster)

    responseEnd = await inquirer.prompt([{
        type:'confirm',
        name: 'end',
        message: 'Would you like to enter another employee information?'
    }]).then(function(resThree){
        resThree.end ? init() : generateHTML ()
    })
};

async function generateHTML() {
    try{
        await init();
        for (let i=0; i<roster.length; i++) {
            render(roster[i]);
        }
    }
    catch (err) {
        console.log(err);
    }

    fs.writeFileSync('team.html', )
}



// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


