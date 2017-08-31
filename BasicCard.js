function BasicCard(front, back) {
    this.front = front;
    this.back = back;
    this.printCard =  function() {
        console.log(back + " " + front);
        console.log("\n_________________\n");
    }
}

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log(firstPresident.front); 

console.log(firstPresident.back);
firstPresident.printCard();

module.exports = BasicCard