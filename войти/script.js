function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, ''); // Удаляем все символы, кроме цифр
  
    // Если первая цифра не '7', добавляем её
    if (value[0] !== '7') {
      value = '7' + value;
    }
  
    // Ограничиваем ввод до 11 цифр
    if (value.length > 11) {
      value = value.slice(0, 11);
    }
  
    // Форматируем вводимые данные
    let formattedValue = '+7 ';
    if (value.length > 1) {
      formattedValue += value.slice(1, 4);
    }
    if (value.length > 4) {
      formattedValue += ' ' + value.slice(4, 7);
    }
    if (value.length > 7) {
      formattedValue += '-' + value.slice(7, 9);
    }
    if (value.length > 9) {
      formattedValue += '-' + value.slice(9, 11);
    }
  
    input.value = formattedValue;
  }
  
  // Устанавливаем фокус на поле ввода при загрузке страницы
  document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phoneInput');
    phoneInput.focus();
  });

function sendCode() {
    const phoneInput = document.getElementById('phoneInput');
    const phoneNumber = phoneInput.value.replace(/\D/g, ''); // Удаляем все символы, кроме цифр

    // Проверяем, что номер состоит из 11 цифр и начинается с '7'
    if (phoneNumber.length === 11 && phoneNumber.startsWith('7')) {
        alert("На ваш номер отправлен код для подтверждения");
    } else {
        alert("Пожалуйста, введите корректный номер телефона");
    }
}