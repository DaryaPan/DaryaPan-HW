// Задание 1
const userNumber = +prompt("Сколько ты зарабатываешь ($)?");
const userWish = +prompt("Сколько ты хочешь зарабатывать ($) ?");

console.log("userNumber", userNumber);
console.log("userWish", userWish);
 
if (userNumber > userWish) {
  alert("Уже можно расслабиться");
}
if (userNumber < userWish) {
  alert("Вы зарабатываете недостаточно");
}
if (userNumber == userWish) {
  alert("У вас идеальная зарплата");
}

// Задание 2
const firstNumber = +prompt("Назовите число");
const twoNumber = +prompt("Назовите еще одно число");

console.log("fistNumber", firstNumber);
console.log("twoNumber", twoNumber);

operationOne = firstNumber + twoNumber;
console.log("firstNumber + twoNumber", operationOne);

operationTwo = firstNumber - twoNumber;
console.log("firstNumber - twoNamber", operationTwo);

operationThree = firstNumber / twoNumber;
console.log("firstNumber / twoNamber", operationThree);

operationFour = firstNumber * twoNumber;
console.log("firstNumber * twoNamber", operationFour);

const userAction =  Number(prompt ("Выберите действие: 1)+ 2)- 3)/ 4)* ?"));
switch (userAction)  {
    case 1 :
        alert (operationOne);
        break;
    case 2 :
        alert (operationTwo);
        break;
    case 3 :
        alert (operationThree);
        break;
    case 4 :
        alert (operationFour);
        break;
    default:
        alert ("Такое действие не умею :(");
}


// Задание 3

const MIN_AGE = 12;
const NORM_AGE = 18;
const MIDDLE_AGE = 60;
const MAX_AGE = 80;

const visitorAge = Number(prompt ("Сколько вам лет?"));
const isWishParents = confirm("Вы получили разрешение у взрослых?");

if (visitorAge <MIN_AGE && visitorAge > MAX_AGE ) {
  console.log("Вход запрещен"); 
}
else if ( visitorAge >= MIN_AGE && isWishParents ) {
  console.log("Вход разрешен");
} 
else if ( visitorAge < NORM_AGE && isWishParents) {
  console.log("Вход разрешен")
}



if (visitorAge > MIDDLE_AGE && visitorAge < MAX_AGE ) {
  console.log("Вход запрещен");
}
else if ( visitorAge >= MIDDLE_AGE && isWishParents ) {
  console.log("Вход разрешен");
} 
else if ( visitorAge < MAX_AGE && isWishParents) {
  console.log("Вход разрешен");
}











