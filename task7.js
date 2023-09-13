// Отримуємо посилання на випадаючі списки та елемент для виводу вибору
const countrySelect = document.getElementById("country");
const citiesSelect = document.getElementById("cities");
const selectedLocation = document.getElementById("selectedLocation");

// Об'являємо об'єкт, що містить міста для кожної країни
const citiesByCountry = {
  ger: ["Berlin", "Munich", "Hamburg"],
  usa: ["New York", "Los Angeles", "Chicago"],
  ukr: ["Kyiv", "Lviv", "Odessa"]
};

// Функція, яка оновлює список міст для обраної країни
function updateCities() {
  const selectedCountry = countrySelect.value;
  const cities = citiesByCountry[selectedCountry];

  // Очищаємо випадаючий список міст
  citiesSelect.innerHTML = "";

  // Додаємо нові елементи до випадаючого списку міст
  cities.forEach((city) => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citiesSelect.appendChild(option);
  });
}

// Обробник події для вибору країни
countrySelect.addEventListener("change", () => {
  updateCities(); // Оновлюємо список міст
  updateSelectedLocation(); // Оновлюємо вивід вибору
});

// Обробник події для вибору міста
citiesSelect.addEventListener("change", () => {
  updateSelectedLocation(); // Оновлюємо вивід вибору
});

// Функція для оновлення виводу обраної країни та міста
function updateSelectedLocation() {
  const selectedCountry =
    countrySelect.options[countrySelect.selectedIndex].text;
  const selectedCity = citiesSelect.value;
  selectedLocation.textContent = `Обрана країна: ${selectedCountry}, Обране місто: ${selectedCity}`;
}

// Викликаємо функцію для початкового заповнення випадаючого списку міст
updateCities();
updateSelectedLocation(); // Оновлюємо вивід вибору