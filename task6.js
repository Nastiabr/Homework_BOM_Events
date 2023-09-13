// Функція для оновлення значень ширини і висоти вікна
function updateWindowSize() {
    const width =
      window.innerWidth 
      document.documentElement.clientWidth 
      document.body.clientWidth;
    const height =
      window.innerHeight 
      document.documentElement.clientHeight 
      document.body.clientHeight;
  
    // Вивести значення на сторінку
    document.getElementById("width").textContent = width;
    document.getElementById("height").textContent = height;
  }
  
  // Викликати функцію при завантаженні сторінки і зміні розміру вікна
  window.addEventListener("load", updateWindowSize);
  window.addEventListener("resize", updateWindowSize);