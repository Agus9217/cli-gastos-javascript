import inquirer from 'inquirer'
import { newSpentPrompt } from './newSpent.js'
import { get, save } from './fileMethods.js'


const main = async () => {
  let run = true

  while (run) {
    const action = await inquirer.prompt([
      {
        type: 'list',
        name: 'choose',
        message: 'Acciones: ',
        choices: [
          {
            value: 1,
            name: 'Ver todos los gastos'
          },
          {
            value: 2,
            name: 'Registrar nuevo gasto'
          },
          {
            value: 99,
            name: 'EXIT'
          }
        ]
      }
    ])
  
    switch (action.choose) {
      case 1:
         await getAllSpent()
        break;
      case 2:
         await createNewSpent()
        break;
      case 99:
        run = false;
        break;
      default:
        run = false;
        break;
    }
  }
  console.log("Bye!");
}

main()

async function createNewSpent() {
  console.log("Resgistrando gasto:");
  const newSpentData = await newSpentPrompt();
  console.log("Nuevo registro de gasto creado: ", newSpentData);
  const currentSpent = await get('gastos')
  currentSpent.push(newSpentData)
  await save('gastos', currentSpent)
}

async function getAllSpent() {
  const currentSpent = await get("gastos");
  console.log(currentSpent)
}
