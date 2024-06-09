import chalk from "chalk";
//anonymous function type with Rest parameters
let buildNameFunc = function (firstname, ...restOfName) {
    return firstname + " " + restOfName.join(" * ");
};
let buildName2 = buildNameFunc("Muhammad", "Javed", "Ali", "Fareed", "Ibraheem", "Iqbal");
console.log(chalk.green.bold(buildName2));
