// dependency for inquirer npm package
var inquirer = require("inquirer");
var fs = require("fs");
var Bcard = require("./BasicCard.js");
var Ccard = require("./ClozeCard.js"); 

function askUser() {
    inquirer.prompt(
        {
            type: "list",
            message: "Do you want to create a Basic Card or a Cloze Card",
            choices: ["Basic Card", "Cloze Card"],
            name: "choice"
        }
    ).then(function (answers) {
        if (answers.choice === "Basic Card") {
          createBasicCard();  
        } 
        else {
             createClozeCard();
        }
    });
}
var cardsBank = [];
function createBasicCard (){
    inquirer
        .prompt([    
            {   
                type: "input",
                name: "front",
                message: "Question Front of the card?"
            }, 
            {
                type: "input",
                name: "back",
                message: "Answer"
            }
        ]).then(function(answers) {
             var newCard = new Bcard (answers.front, answers.back);
             cardsBank.push(newCard);
             console.log("Great Job!!!")
             console.log("This is the card you just created: \n");
             console.log(newCard.front);
             console.log(newCard.back);
             newCard.printCard();
        });
};
var clozeCardsBank = [];
function createClozeCard (){
    inquirer
        .prompt([    
            {   
                type: "input",
                name: "fulltext",
                message: "Please input fulltext"
            }, 
            {
                type: "input",
                name: "cloze",
                message: "please input the part you want to cloze - delete"
            }
        ]).then(function(answers) {
             var newCard = new Ccard (answers.fulltext, answers.cloze);
             cardsBank.push(newCard);
             console.log("Great Job!!!")
             console.log("This is the card you just created: \n");
             newCard.printCard();
        });
};
askUser();