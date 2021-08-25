// tabs
$('.card').on('click', function(){
    let currTab = ($(this).parent().index());

    $('.card').removeClass('card-active');
    $(this).addClass('card-active');

    $('.tab-content').removeClass('active');
    $('.tab-content').eq(currTab).addClass('active');
})

//hamburger
$('.hamburger').on('click', function(){
    $('.head__menu').toggle();
})

$('.menu-close').on('click', function(){
    $('.head__menu').hide();
})

//paralax
let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);

//SLIDER swiper
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerView: 3,
    loop: true,
    stopOnLastSlide: false,
    autoplay: {
        delay: 2000
    }
});

// MAPS
ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7,
            controls: ['zoomContlol', 'geolocationControl']
        });
    }

// VALIDATE
$.validator.addMethod('regex', function(value, element, regexp){
    let regExsp = new RegExp(regexp);
    return regExsp.test(value);
}, 'Please check your input');

$('form').validate({
    rules: {
        firstName: {
            required: true,
            regex: "[A-Za-z]{1,32}"
        },
        phoneNumber: {
            digits: true,
            required: true,
            minlegth: 10,
            maxlength: 11,
            regex: "[0-9]+"
        }
    },
        messages: {
            firstName: 'Не правильно указано Ваше имя',
            phoneNumber: 'Введите Ваш номер телефона'
        }
});