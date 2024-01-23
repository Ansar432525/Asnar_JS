// //Постфиксная и префиксная формы//

// let a = 1, b = 1;

// let c = ++a; 
// let d = b++; 

// console.log(a); // Результат: 2
// console.log(b); // Результат: 2
// console.log(c); // Результат: 2
// console.log(d); // Результат: 1





// // Результат присваивания Чему будут равны переменные a и x после исполнения кода в примере ниже? //

// let a = 2;
// let x = 1 + (a *= 2);

// console.log(a); // Результат: 4
// console.log(x); // Результат: 5





// // Преобразование типов. Какой результат будет у выражений ниже?//

// console.log(" " + 1 + 0);        // Результат: "10"
// console.log(" " - 1 + 0);        // Результат: -1
// console.log(true + false);       // Результат: 1
// console.log(6 / "3");            // Результат: 2
// console.log("2" * "3");           // Результат: 6
// console.log(4 + 5 + "px");       // Результат: "9px"
// console.log("$" + 4 + 5);        // Результат: "$45"
// console.log("4" - 4);             // Результат: 0
// console.log("4px" - 2);           // Результат: NaN
// console.log("    -9    " + 5);   // Результат: "    -9    5"
// console.log("    -9    " - 5);   // Результат: -14
// console.log(null + 1);           // Результат: 1
// console.log(undefined + 1);      // Результат: NaN
// console.log("    \t \n " - 2);   // Результат: -2




// //Исправьте сложение//
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);


// a = parseFloat(a);
// b = parseFloat(b);

// alert(a + b); // Теперь результат будет 3



// //Работа с переменными//
// // Задача 1
// let num = 3;
// alert(num);

// // Задача 2
// let a = 10;
// let b = 2;
// alert("Сумма: " + (a + b) + "\nРазность: " + (a - b) + "\nПроизведение: " + (a * b) + "\nЧастное: " + (a / b));

// // Задача 3
// let c = 15;
// let d = 2;
// let result = c + d;
// alert(result);

// // Задача 4
// let a1 = 10;
// let b1 = 2;
// let c1 = 5;
// alert("Сумма: " + (a1 + b1 + c1));

// // Задача 5
// let a2 = 17;
// let b2 = 10;
// let c2 = a2 - b2;
// let d2 = 7;
// let result2 = c2 + d2;
// alert(result2);






// //Работа со строками//
// // Задача 1
// let str = 'Привет, Мир!';
// alert(str);

// // Задача 2
// let str1 = 'Привет, ';
// let str2 = 'Мир!';
// let greeting = str1 + str2;
// alert(greeting);

// // Задача 3
// let name = 'Ансар Алиев'; 
// alert('Привет, ' + name + '!');

// // Задача 4
// let age = 16; 
// alert('Мне ' + age + ' лет!');






// // Функция prompt //
// let userName = prompt("Введите ваше имя:");
// alert("Ваше имя " + userName);

// let userNumber = prompt("Введите число:");
// let square = userNumber * userNumber;
// alert("Квадрат числа " + userNumber + " равен " + square);


// //Обращение к символам строки//
// // Задача 1
// let str = 'abcde';
// alert(str[0]); // Выводит символ 'a'
// alert(str[2]); // Выводит символ 'c'
// alert(str[4]); // Выводит символ 'e'

// // Задача 2
// let num = '12345';
// let product = 1;

// for (let i = 0; i < num.length; i++) {
//   product *= parseInt(num[i], 10);
// }

// alert("Произведение цифр числа " + num + " равно " + product);




// //Практика//-------------------------------------
// //--
// //--
// //--


// //Работа с присваиванием и декрементами//

// var num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

// //2
// var num = 10;
// num++;
// num++;
// num++;
// alert(num);