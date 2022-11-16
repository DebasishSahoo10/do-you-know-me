const readlineSync = require('readline-sync')
const chalk = require('chalk')
let score = 0

let userWelcome = () => {
  const welcomeMessage = (chalk.inverse("Hey, Do you know Debasish well! Check with this quiz."))
  console.log(welcomeMessage)

  const pressKey = readlineSync.question('Hit Enter key to start.', { hideEchoBack: true, mask: '' })
  console.log(pressKey)

  const userName = readlineSync.question("Let's start by entering your name -  ")
  console.log(chalk.hex('#FF8800')("Roll up your sleeves, ") + chalk.red(userName))

  console.log("Here goes the first question" + " (Remember - you have to press the key assigned to the write answer)")
}


let questionDatabase = [
  {
    question: "What is his age? ",
    answer: ['12', '38', '22', '24'],
    answerOpt: '22'
  },
  {
    question: "Is he Vegeterian or not? ",
    answer: ['Yes', 'No'],
    answerOpt: 'No'
  },
  {
    question: "what is current phone? ",
    answer: ['Oneplus 9R', 'iPhone 13', 'Samsung S21 FE'],
    answerOpt: 'Oneplus 9R'
  },
  {
    question: "Where did he visited in 2018? ",
    answer: ['Mumbai', 'Gangtok', 'Simla'],
    answerOpt: 'Gangtok'
  },
  {
    question: "What is his favourite color? ",
    answer: ['White', 'Blue', 'Pink', 'Lavendar'],
    answerOpt: 'Pink'
  },
  {
    question: "What he will choose to Live Nearby? ",
    answer: ['Mountains', 'Sea', 'Jungle'],
    answerOpt: 'Mountains'
  },
  {
    question: "Where Does he live? ",
    answer: ['Bhubaneswar', 'Mumbai', 'Delhi', 'Cuttack'],
    answerOpt: 'Bhubaneswar'
  },
]




userWelcome()
questionDatabase.map((DB) => {
  let userAnswer = readlineSync.keyInSelect(DB.answer, DB.question)
  if (DB.answer[userAnswer] === DB.answerOpt) {
    score = score + 1
    console.log(chalk.bgGreenBright.black("Yes, you are right"))
    console.log(chalk.bgBlueBright.black("And your score is: " + score))
  } else {
    console.log(chalk.bgRed("Oops, you are wrong"))
    console.log(chalk.bgBlueBright.black("And your score is: " + score))
  }
  console.log("--------------------------------")
}
