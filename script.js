//1) Створити функцію конструктор яка створює обєкт юзер інфо в функції повиний бути метод виводу інформації про юзера.
//Метод повинен бути винесений в прототип.Створити метод на прототайп для оновлення ключів обєкту. Створити функцію сорт яка посортує массив з створеними обєктами юзер по віку ( в порядку зростання і порядку зниження)

function UserInfo(name,age) {
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `name: ${this.name} age: ${this.age}`; 
    }
} 
UserInfo.prototype.sortarr = function(arr) {
    let sorted1 = arr.slice();
    let sort1 = sorted1.sort((a,b) => a+b)
    let sorted2 = arr;
    let sort2 = sorted2.sort((a,b) => a-b)
    return `${sort1} and ${sort2}`
}
const userJohn = new UserInfo("John",40);
const userAlex = new UserInfo("Alex",25);
const userPaul = new UserInfo("Paul",30);
let arrAge = [userJohn.age, userAlex.age, userPaul.age]
console.log(UserInfo.prototype.sortarr(arrAge))

//2) Створити функцію конструктор створення (прямокутника, квадрата ) в прототип винести методи обчислення Площі, переметра, та визначити діагональ 

function ConstructorFigure(sideA, sideB) {
    this.sideA = parseInt(sideA);
    this.sideB = parseInt(sideB);
}

const figure = new ConstructorFigure(prompt("Сторона A"), prompt("Сторона B"))

ConstructorFigure.prototype.area = function() {
    return this.sideA*this.sideB
}
console.log(figure.area())

ConstructorFigure.prototype.perimeter = function() {
    return this.sideA+this.sideA+this.sideB+this.sideB
} 
console.log(figure.perimeter())

ConstructorFigure.prototype.diagonal = function() {
    if(this.sideA == this.sideB) {
        return this.sideA * Math.sqrt(2)
    }
    else {
        return Math.sqrt(Math.pow(this.sideA,2) + Math.pow(this.sideB,2))
    }
}
console.log(figure.diagonal())

//3) Отримати від користувача значення name  вивести в консоль, першу і останню літеру з name. Якщо імя користувача довше 3 символів, то ще вивсести перші 3 літери + ...

let userName = prompt("Введіть ім'я");
let last = userName.length-1;
console.log(`${userName[0]}  ${userName[last]}`)
if(userName.length>3) {
    console.log(`${userName.slice(0,3)}...`)
}