import chalk from 'chalk';

//QUESTION 34: Pizzas: Share your favorite pizzas and express your love for them.

let favoritePizzas = ["Margherita", "Pepperoni", "BBQ Chicken"];
for (let i = 0;  i <favoritePizzas.length ; i++) {
    
    console.log(chalk.greenBright.bold(`I like ${favoritePizzas[i]} pizza.`));
}
console.log(chalk.yellow.bold("Margherita, Pepperoni, and BBQ Chicken are some of my favorite pizzas."));
console.log(chalk.green.bold("I really enjoy exploring different flavors and combinations!"));
console.log(chalk.red.bold("I really love pizza!"));

//QUESTION 35: Animals: Highlight animals with a common trait.

// define a list of animals
let animals:string[] = ["goat", "dog", "rabbit"];

//print the each animals of list using for loop

for(let animal of animals){
    console.log(chalk.yellow.bold(animal));
}

// print a statement of each animal

for(let animal of animals){
    switch(animal){
        case "goat": 
            console.log(chalk.green.bold("A goat is known as \"kids\""));
            break;
            case "dog":
                console.log(chalk.yellow.bold('Dogs are man\'s best friend'));
                break;
            case "rabbit":
                console.log(chalk.green.bold('Rabbits are often seen in pairs'));
                default :
                    console.log(chalk.yellow.bold(`${animal} is an interesting creature`));
    }
    // Print a statement about the common characteristic
console.log(chalk.green.bold("Any of these animals would make a great pet!"));
}