// ex 4.1
let a=true;
console.log(a);
if (a){
    console.log("Hello world");
}
if (!a){
    console.log("Goodbye world")
}else{
    console.log("do something else");
}

// ex 4.2
let age=+prompt("enter your age");
let message;
if (age>21){
    message="entry confirmed and you can purchase alcohol";
}else if (age>19){
    message="entry confirmed but  you can't purchase alcohol";
}else{
    message=("please enter valid age");
}
console.log(message);

//ex 4.3
ID=true;
let Id= ID ? "yes" : "no";
console.log(Id);

// ex 4.4

let value=Math.floor(Math.random()*5);
let value2=prompt("enter a number");
let response;
switch(value2){
    case 0:
        response="hello";
    break;
    case 1:
        response="hi";
    break;
    case 2:
        response="how are you ";
    break;
    case 3:
        response="greetings";
    break;
    case 4:
        response="hemlo";
    break;
    case 5:
        response="Assalamualaikum";
    break;
    default:
        response="invalid input";
}
console.log("you choose"+"" + value + "and my response is " + response );

//ex 4.5

let prize = prompt("Select a number between 0 and 10 to determine your prize:");
prize = Number(prize);
let outputMessage = "My Selection: ";
let prizeMessage;
switch (prize) {
  case 0:
    prizeMessage = "You won a small toy!";
    break;
  case 1:
    prizeMessage = "Congratulations! You've won a coupon for a free meal.";
    break;
  case 2:
    prizeMessage = "You've won a movie ticket!";
    break;
  case 3:
    prizeMessage = "Great! You won a gift card.";
    break;
  case 4:
    prizeMessage = "You've won a discount voucher!";
    break;
  case 5:
    prizeMessage = "Amazing! You won a new gadget.";
    break;
  case 6:
    prizeMessage = "You won a weekend getaway!";
    break;
  case 7:
  case 8:
  case 9:
    prizeMessage = "Congratulations! You've won a special prize!";
    break;
  case 10:
    prizeMessage = "WOW! You've won the grand prize!";
    break;
  default:
    prizeMessage = "Invalid selection.";
}
console.log(outputMessage + prizeMessage);

// Chapter projects
// Evaluating a number game
let numValue = Math.floor(Math.random() * 10);
let userInput = prompt("Enter a number between 0-9");
if (userInput == numValue) {
    alert("Your number is equal to the random number.");
    } else if (userInput > numValue) {
        alert("Your number is greater than the random number.");
    } else {
        alert("Your number is smaller than the random number.");
}

//Friend checker game
let name=prompt("enter your name");
let output;
switch(name){
    case 'khadijah':
        output='hello' +name + 'you are my friend';
    break;
    case 'aqsa':
        output='hello' +name + 'you are my friend';
    break;
    case 'mehwish':
        output='hello' +name + 'you are my friend';
    break;
    default:
        output="i don't know you" ;
}
document.write(output);

// Rock Paper Scissors game
let array=['rock','paper','scissors'];
let number=Math.floor(Math.random()*3);
let number2=array[number];
let input=+prompt('what do you want to select ["rock","paper","scissors"] 1 ,2 or 3 ');
input-=1
input=array[input];
if (number==input){
    document.write(`it's a tie`);
}else if (input>number){
    console.log('your' +input + 'beats the computers' + number2);

}else{
    console.log('the computer' + number2 +  'beats your' +input);
}



