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

    }
};


function checkIfCloze(text, cloze) {
    var check = text.includes(cloze);
    console.log(check);
    if (check == false) {
       console.log("cloze is undefined or doesn't appear in " + text);
    }
   else if (check == true) {
       var dots = " ...";
       console.log(text);
       var newText = text.replace(cloze, dots);
       console.log ("partial: " + newText);
       this.partial = newText;
    }
  };

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
// console.log("cloze:" + firstPresidentCloze.cloze);

// // " ... was the first president of the United States.
// firstPresidentCloze.partial();

// // "George Washington was the first president of the United States.
// console.log("full: " + firstPresidentCloze.fullText);
firstPresidentCloze.printCard();
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

brokenCloze.printCard();


//module.exports = ClozeCard;