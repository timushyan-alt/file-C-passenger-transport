// Плавная прокрутка к форме заказа
function scrollToOrder() {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
}

// Обработка формы
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Чтобы страница не перезагружалась

    // Получаем данные
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const carType = document.getElementById('carType').value;
    const passengers = document.getElementById('passengers').value;
    const phone = document.getElementById('phone').value;
    const comment = document.getElementById('comment').value;

    // Здесь можно отправить данные на сервер
    // Пока просто показываем сообщение
    console.log({
        from, to, date, time, carType, passengers, phone, comment
    });

    // Показываем сообщение об успехе
    document.getElementById('successMessage').style.display = 'block';
    
    // Очищаем форму
    this.reset();

    // Через 5 секунд скрываем сообщение
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
    }, 5000);
});