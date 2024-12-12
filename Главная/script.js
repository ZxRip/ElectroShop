// Получаем модальное окно
var modal = document.getElementById("myModal");

// Получаем кнопку, открывающую модальное окно
var btn = document.querySelector(".div2");

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, открываем модальное окно 
btn.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь нажимает в любом месте за пределами модального окна, закрываем его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Получаем второе модальное окно
var brandModal = document.getElementById("brandModal");

// Функция для открытия второго модального окна
function openBrandModal() {
  brandModal.style.display = "block";
  modal.style.display = "none"; // Закрываем первое модальное окно
}

// Функция для закрытия второго модального окна
function closeBrandModal() {
  brandModal.style.display = "none";
}

// Добавляем обработчик события клика на "Смартфоны"
document.querySelector('.frame-307 .left-h-33').addEventListener('click', openBrandModal);

// Добавляем обработчик события клика на <span> (x) для закрытия второго модального окна
document.querySelector('#brandModal .close').addEventListener('click', closeBrandModal);

// Закрываем второе модальное окно, если пользователь нажимает вне его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == brandModal) {
    brandModal.style.display = "none";
  }
}