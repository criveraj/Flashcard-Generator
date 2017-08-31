var text = "";
var cloze = "";

function ClozeCard (text, cloze) {
    this.cloze = cloze;  //cloze-deleted portion of the text
    this.partial = function(){
        checkIfCloze(text, cloze);       
    };      
    this.fullText = text; 
    this.printCard = function () {
        console.log("FullText: " + this.fullText);
        console.log("cloze:" + this.cloze);
        this.partial();
        console.log("\n_________________\n");

    } 
};


function checkIfCloze(text, cloze) {
    var check = text.includes(cloze);
    
    if (check == false) {
       console.log("cloze is undefined or doesn't appear in " + text);
    }
   else if (check == true) {
       var dots = " ...";
       
       var newText = text.replace(cloze, dots);
       console.log ("partial: " + newText);
       this.partial = newText;
    }
  };
// test with cloze at the begining
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
firstPresidentCloze.printCard();

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");
brokenCloze.printCard();

// test with cloze at the end
var testcard = new ClozeCard("Lake Okeechobee is located in Florida", "Florida")
testcard.printCard();

module.exports = ClozeCard;