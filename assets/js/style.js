AOS.init();


var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


setTimeout(() => {
    const preloader = document.getElementById("preloader");

    preloader.style.display = "none";

    document.body.classList.remove("overflow-hidden");
}, 3000);
