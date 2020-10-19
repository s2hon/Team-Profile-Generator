const employeeChoice = [engineer, intern, manager];

const userQues = [
    {type: 'input',
    name: 'name',
    message: 'what is the name of the employee?',
    validate: answer => {
        if (typeof answer !== 'string' || typeof answer == ' ') {
            console.log("please enter a valid name");
            return false;
        }
        else {
            return true;}
        }
    },
    {type: 'input',
    name: 'email',
    message: 'Enter email of the employee',
    validate: answer => {
        if (answer !== 'string' || typeof answer == ' ') {
            console.log("please enter a valid email");
            return false;}
        else {
            return true;}
        }
    },
    {type: 'list',
    name: 'role',
    message: 'Choose the role of the employee',
    choices: employeeChoice,
    validate: answer => {
        if (answer.length !== 1) {
            console.log('You must to select only one option');
            return false;
        } else {
            return true;
            }
        }
    }
];


/*    {type: 'input',
name: 'id',
message: 'Enter id of the employee',
validate: answer => {
    if (typeof answer !== 'number' || typeof answer == ' ') {
        console.log("please enter a valid id");
        return false;}
    else {
        return true;}
    }
},
*/