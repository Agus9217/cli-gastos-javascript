import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

export const newSpentPrompt = async () => {
  return await inquirer.prompt(newUserPrompt);
}


const newUserPrompt = [
  {
    type: "input",
    name: "gasto",
    message: "Gasto del dia:",
  },
  {
    type: "date",
    name: "fecha",
    message: "Fecha:",
    locale: "en-US",
    format: { month: 'short', hour: undefined, minute: undefined },
    clearable: true
  }
];