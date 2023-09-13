// Отримуємо посилання на випадаючий список і кнопку
const mySelect = document.getElementById("mySelect");
const deleteButton = document.getElementById("deleteButton");

// Додаємо обробник події для натискання на кнопку
deleteButton.addEventListener("click", () => {
  // Отримуємо обраний елемент списку
  const selectedOption = mySelect.options[mySelect.selectedIndex];

  // Перевіряємо, чи є обраний елемент
  if (selectedOption) {
    // Видаляємо обраний елемент зі списку
    mySelect.remove(mySelect.selectedIndex);
  } else {
    alert("Спершу виберіть елемент для видалення.");
  }
});