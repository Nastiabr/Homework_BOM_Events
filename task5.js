// Отримуємо посилання на кнопку за її id
const button = document.getElementById("myButton");

// Додаємо обробник подій для натискання на кнопку
button.addEventListener("click", function () {
  alert("I was pressed!");
});

// Додаємо обробник подій для наведення курсора на кнопку
button.addEventListener("mouseover", function () {
  alert("Mouse on me!");
});

// Додаємо обробник подій для відведення курсора від кнопки
button.addEventListener("mouseout", function () {
  alert("Mouse is not on me!");
});