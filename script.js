// Установим дату свадьбы
const weddingDate = new Date("november 30, 2024 18:00:00").getTime();

// Обновляем таймер каждую секунду
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Рассчитываем дни, часы, минуты и секунды
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Выводим результат на страницу
    document.getElementById("days").innerHTML = days + "д ";
    document.getElementById("hours").innerHTML = hours + "ч ";
    document.getElementById("minutes").innerHTML = minutes + "м ";
    document.getElementById("seconds").innerHTML = seconds + "с ";

    // Если таймер закончился, выводим сообщение
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Событие началось!";
    }
}, 1000);

// // Функция для инициализации карты
// function initMap() {
//     const mapOptions = {
//         center: { lat: 43.194395, lng: 76.909857 }, // Примерный адрес (Москва), 
//         zoom: 15,
//     };

//     const map = new google.maps.Map(document.getElementById("google-map"), mapOptions);

//     // Добавим метку на карте
//     const marker = new google.maps.Marker({
//         position: { lat: 43.194395, lng: 76.909857},
//         map: map,
//         title: "Загородный клуб Роза ветров"
//     });
// }
