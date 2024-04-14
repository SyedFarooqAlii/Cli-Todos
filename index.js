#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let todos = [];
let condition = "true";
async function createtodo(todos) {
    while (condition == "true") {
        let welcome = console.log(chalk.cyanBright("       Welcome To The TodoList App "));
        let addtask = await inquirer.prompt([
            {
                name: "operator",
                message: "What Would You Like To Do In Your Todos?",
                type: "list",
                choices: ["Add", "View", "Update", "Delete", "Exit"],
            },
        ]);
        if (addtask.operator === "Add") {
            let add = await inquirer.prompt([
                {
                    name: "addtask",
                    message: "Please Add Task",
                    type: "input",
                },
            ]);
            if (add.addtask == "") {
                console.log(chalk.redBright("Please Add Valid Task"));
            }
            else {
                todos.push(add.addtask);
                console.log(chalk.blueBright(todos));
            }
        }
        if (addtask.operator === "View") {
            console.log(todos);
        }
        if (addtask.operator === "Update") {
            let update = await inquirer.prompt([
                {
                    name: "updatetask",
                    message: "Please Select Task Would You Like To Update",
                    type: "list",
                    choices: todos,
                },
                {
                    name: "updatetask2",
                    message: "Updated Task",
                    type: "input",
                },
            ]);
            let newtodos = todos.filter((val) => val != update.updatetask);
            todos = [...newtodos, update.updatetask2];
        }
        if (addtask.operator === "Delete") {
            let remove = await inquirer.prompt([
                {
                    name: "deletetask",
                    message: "Please Select Task Would You Like To Delete",
                    type: "list",
                    choices: todos,
                },
            ]);
        }
        ;
        if (addtask.operator === "Exit") {
            let exit = await inquirer.prompt([
                {
                    name: "exit",
                    type: "confirm",
                    default: "false",
                    message: "Do You Want To Exit This TodoLIst App",
                },
            ]);
            condition = addtask.exit;
            console.log(chalk.cyanBright("   Thanks For Visiting Our TodoList App!"));
        }
    }
}
createtodo(todos);
