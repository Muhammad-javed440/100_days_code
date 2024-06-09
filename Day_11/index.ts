import chalk from 'chalk';
//QUESTION 31: No Users: Ensure your user list isn’t empty.
let users : string[] = [];
if(users.length == 0){
    console.log(chalk.red.bold('Users list is empty.'));
}else{
    for(let i=0; i<users.length; i++){
        console.log(chalk.green.bold(`Welcome  ${users[i]}`));
    }       
}
//QUESTION 32: Checking Usernames: Ensure uniqueness in usernames.
let usernames : string[] = ['user1', 'user2', 'admin', 'user3', 'user4'] ;
usernames.forEach(user =>{
    if(user == 'admin'){
        console.log(chalk.yellow.bold(`Hello ${user}, welcome back! You have special privileges.`));
        console.log(chalk.blue.bold("Hello admin, would you like to see a status report?"));
    } else {
        console.log(chalk.red.bold(`Hello ${user}, welcome back!`));
        console.log(chalk.green.bold(`Hello ${user}, thank you logging in again.`));
    }
})

//QUESTION 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(number=>{
    if(number==1){
        console.log(chalk.yellow.bold(`${number}st`));
    }else if(number==2){
        console.log(chalk.yellow.bold(`${number}nd`));
    }else if(number==3){
        console.log(chalk.yellow.bold(`${number}rd`));
    }else {
        console.log(chalk.green.bold(`${number}th`));
    }

})
