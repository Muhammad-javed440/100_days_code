import chalk from "chalk";

//anonymous function type with Rest parameters

let buildNameFunc: (fname: string, ...rest: string[]) => string = function (
  firstname: string,
  ...restOfName: string[]
) {
  return firstname + " " + restOfName.join(" * ");
};

let buildName2 = buildNameFunc(
  "Muhammad",
  "Javed",
  "Ali",
  "Fareed",
  "Ibraheem",
  "Iqbal"
);

console.log(chalk.green.bold(buildName2))
