#! /usr/bin/env node
import inquirer from "inquirer"
let todos=[];
let condition=true;
while (condition){
let todos_questions=await inquirer.prompt(
    [{
        message:"Add Your Todo Task Here:",
        type:"input",
        name:"first_question"
    
    },
{
    message:"Do you want to add more task?",
    type:"confirm",
    choice:["yes","No"],
    name:"second_question",
    default:true,
}]
);
todos.push(todos_questions.first_question);
console.log(todos)
condition=todos_questions.second_question
if (todos_questions.second_question=="No"){
    console.log(todos)
}};