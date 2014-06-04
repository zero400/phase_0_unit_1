// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Brooks Roley
//  2.Stephens Xu

var stephens = {
name: "Stephens",
age: 25,
quote: "hello world"
}

var brooks = {
name: Brooks,
age: 24,
quote: "lets do this"
}


// 1. "Here they Come!"

var adam = {
name: "Adam Sandler",
age: 47,
quote: "That's your home! Are you too good for our home?!"
}

var kristen = {
name: "Kristen Bell",
Age: 33,
Quote: "Do you wanna build a snowman?"
}

var jim = {
name: "Jim Carrey",
age: 52,
quote: "...So you're telling me there's a chance? YEAH!",
}

var clients = [adam, kristen, jim];


// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

function Client(name, age, quote) {
    this.name = name;
    this.age = age;
    this.quote = quote;
    this.print = function(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Quote: " + this.quote);
    }
    this.showQuote = function() {
        console.log(this.quote);
    }
}


var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";