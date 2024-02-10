function submitForm(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    const formData = new FormData(event.target); // Получаем данные формы
    const formUrl = 'https://app.netlify.com/sites/krasnograd/forms'; // Замените на ваш URL формы Netlify

    fetch(formUrl, {
        method: 'POST',
        body: formData // Отправляем данные на URL формы Netlify методом POST
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        alert('Дякуємо за заповнення анкети'); // Оповещение об успешной отправке
        event.target.reset(); // Сброс формы после успешной отправки
    })
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

