import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word"
    }]);
const Word = answer.Sentence.trim().split(" ");
console.log(Word);
console.log(`here your Count length ${Word.length}`);
