
import chalk from 'chalk';

function buildName(firstname:string, ...restOfName:string[]){
    
     return firstname+" "+restOfName.join(" *");
}

let buildName1=buildName('Muhammad','Javed','Ali','Fareed','Ibraheem','Iqbal');

console.log(chalk.green.bgYellow.bold(buildName1));