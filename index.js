#! /usr/bin/env node 
console.log("\t\t\t: atm machine :\t\t\t".replace(/(^|\s)\S/g, (char) => char.toUpperCase()));
import inquirer from "inquirer";
let myBalance = 15000;
let pinCreation = await inquirer.prompt([
    {
        name: "code",
        message: "Create your Pin:",
        type: "number"
    }
]);
const Pin = await inquirer.prompt([
    {
        name: "password",
        message: "Please Enter your Pin:",
        type: "number"
    }
]);
if (pinCreation.code === Pin.password) {
    console.log("Your pin is correct");
    console.log("What do you want to do");
    let task = await inquirer.prompt([
        {
            name: "performtask",
            message: "Select the option",
            type: "list",
            choices: ['Check balance', 'Fast cash', 'Withdraw']
        }
    ]);
    if (task.performtask === 'Fast cash') {
        let amountWithdraw = await inquirer.prompt([
            {
                name: "amount",
                message: "Select Amount please !",
                type: "list",
                choices: ['1000', '2000', '5000', '10000']
            }
        ]);
        if (amountWithdraw.amount === '1000') {
            console.log(`You Withdraw cash is ${amountWithdraw.amount} $`);
            console.log("Remaing Account balance is : ", myBalance -= 1000, "$");
        }
        else if (amountWithdraw.amount === '2000') {
            console.log(`You Withdraw cash is ${amountWithdraw.amount} $`);
            console.log("Remaing Account balance is : ", myBalance -= 2000, "$");
        }
        else if (amountWithdraw.amount === '5000') {
            console.log(`You Withdraw cash is ${amountWithdraw.amount} $`);
            console.log("Remaing Account balance is : ", myBalance -= 5000, "$");
        }
        else if (amountWithdraw.amount === '1000') {
            console.log(`You Withdraw cash is ${amountWithdraw.amount} $`);
            console.log("Remaing Account balance is : ", myBalance -= 10000, "$");
        }
    }
    else if (task.performtask === 'Check balance') {
        console.log(`Your account balance is: ${myBalance}$`);
    }
    else if (task.performtask === 'Withdraw') {
        let withdraw = await inquirer.prompt([
            {
                name: "cash",
                message: "Enter an Amount:",
                type: "number"
            }
        ]);
        if (withdraw.cash > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            console.log(`You Withdraw cash is ${withdraw.cash} $`);
            console.log("Remaing Account balance is : ", myBalance -= withdraw.cash, "$");
        }
    }
}
else {
    console.log("You Entered a  wrong pin");
}
console.log("Thanks !");
