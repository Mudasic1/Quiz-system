
import inquirer from "inquirer";

console.log("welcome to my adventure quiz game:")
console.log("you are required to gain maximum 4 points to the window.")
let points = 0;
// Q1
let question = await inquirer.prompt([
    {
        name:"one",
        message: "Typescript is a superset of?",
        type:"list",
        choices:["Python","Java","C++","Javascript"]
    }
])
if(question.one == "Javascript"){
    console.log("Your answar is correct");
    points++;
}else{
    console.log("Incorrect answar")
};
// Q2
let question2 = await inquirer.prompt([
    {
        name:"two",
        message: "Typescript is developed by?",
        type:"list",
        choices:["Microsoft","amazon","IOS","nvidia"]
    }
])
if(question2.two == "Microsoft"){
    console.log("Your answar is correct");
    points++;
}else{
    console.log("Incorrect answar")
};
// Q3
let question3 = await inquirer.prompt([
    {
        name:"three",
        message: "Capital of Pakistan?",
        type:"list",
        choices:["Karachi","Islamabad","Hyderabad","KPK"]
    }
])
if(question3.three == "Islamabad"){
    console.log("Your answar is correct");
    points++;
}else{
    console.log("Incorrect answar")
};
// Q4
let question4 = await inquirer.prompt([
    {
        name:"four",
        message: "Facebook developer is?",
        type:"list",
        choices:["Mark zuckerberg","Elon musk","Jeff bezos","Bill gates"]
    }
])
if(question4.four == "Mark zuckerberg"){
    console.log("Your answar is correct");
    points++;
}else{
    console.log("Incorrect answar")
};
// Q5
let question5 = await inquirer.prompt([
    {
        name:"five",
        message: "Founder of Pakistan?",
        type:"list",
        choices:["Quid-e-Azam M.Ali Jannah","Illama Iqbal","Liaquat Ali Khan","Fatima Jannah"]
    }
])
if(question5.five == "Quid-e-Azam M.Ali Jannah"){
    console.log("Your answar is correct");
    points++;
}else{
    console.log("Incorrect answar")
};
// Output conditions
if(points >= 4){
    console.log("Congratulations!")
    console.log(`Your points ${points}`)
}else{
    console.log("You loose! try next time")
    console.log(`Your points ${points}`)
};


