// // Задание 1

// const userSalary = prompt ('Сколько ты зарабатываешь? ($)');
// const userWish = prompt ('Сколько ты хочешь зарабатывать? ($)');

// console.log(userSalary) ;
// console.log(userWish) ;

// if (userSalary > userWish){
//     alert ('Уже можно расслабиться: ' + userSalary + ' больше ' + userWish );
// }
// if (userSalary < userWish){
//     alert ('Вы зарабатываете недостаточно: ' + userSalary + ' меньше ' + userWish );
// }
// if (userSalary == userWish){
//     alert ('У вас идеальная зарплата: ' + userSalary + ' равно ' + userWish );
// }


// // // Задание 2

// const firstNumber = +prompt("Назовите число");
// const twoNumber = +prompt("Назовите еще одно число");

// console.log("fistNumber", firstNumber);
// console.log("twoNumber", twoNumber);

// operationOne = firstNumber + twoNumber;
// console.log("firstNumber + twoNumber", operationOne);

// operationTwo = firstNumber - twoNumber;
// console.log("firstNumber - twoNamber", operationTwo);

// operationThree = firstNumber / twoNumber;
// console.log("firstNumber / twoNamber", operationThree);

// operationFour = firstNumber * twoNumber;
// console.log("firstNumber * twoNamber", operationFour);

// const userAction =  Number(prompt ("Выберите действие: 1)+ 2)- 3)/ 4)* ?"));
// switch (userAction)  {
//     case 1 :
//         alert ('Результат вычисления: ' + operationOne);
//         break;
//     case 2 :
//         alert ('Результат вычисления: ' + operationTwo);
//         break;
//     case 3 :
//         alert ('Результат вычисления: ' + operationThree);
//         break;
//     case 4 :
//         alert ('Результат вычисления: ' + operationFour);
//         break;
//     default:
//         alert ("Такое действие не умею :(");
// } 


// Задание 3 

const MIN_AGE = 12;
const NORM_AGE = 18;
const MIDDLE_AGE = 60;
const MAX_AGE = 80;

const visitorAge = Number(prompt('Сколько вам лет?'));

if ( visitorAge >= MIN_AGE && visitorAge < NORM_AGE || visitorAge >= MIDDLE_AGE && visitorAge < MAX_AGE) {
    confirm ('У вас есть разрешение взрослых?');
} 
 
if (visitorAge < MIN_AGE || visitorAge > MAX_AGE) {
    console.log('Вход запрещен');
}
if (visitorAge >= NORM_AGE || visitorAge <= MIDDLE_AGE) {
    console.log('Вход разрешен');
}
   
