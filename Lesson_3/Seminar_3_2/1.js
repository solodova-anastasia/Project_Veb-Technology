// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, которые ввел пользователь, 
// вывод должен выглядеть так (пример): 
// Результат сложения чисел 5 и 2 равен 7.

function sum(n1, n2) {
    return n1 + n2;
  }
  
  const num1 = Number.parseFloat(prompt("Введите первое число"));
  const num2 = Number.parseFloat(prompt("Введите второе число"));
  
  alert(`Результат сложения чисел ${num1} и ${num2} равен ${sum(num1, num2)}`);



// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
// и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// - При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну, вы держитесь там!”.

