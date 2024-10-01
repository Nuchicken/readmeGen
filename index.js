// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    message: "Please Name your Repo",
    name: "repoName",
  },
  {
    type: "list",
    message: "Please Choose a license for the Repo",
    name: "license",
    choices: [
      "N/A",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 2-Clause "Simplified"',
      'BSD 3-Clause "New" or "Revised" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
    ],
  },
  {
    type: "input",
    message:
      "Please Provide a short description explaining the what, why, and how of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please Enter Installation Instructions",
    name: "install",
  },
  {
    type: "input",
    message: "Please Enter Usage Information",
    name: "usage",
  },
  {
    type: "input",
    message: "Please Enter Contributution Guideines",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please Enter Test Instructions",
    name: "test",
  },
  {
    type: "input",
    message: "Please Enter GitHub Username",
    name: "gitUserName",
  },
  {
    type: "input",
    message: "Please Enter Email",
    name: "email",
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("File has been created!")
  );
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((qData) => {
    writeToFile("new_README.md", generateMarkdown(qData));
  });
}

// Function call to initialize app
init();
