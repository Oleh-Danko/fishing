window.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        link = document.querySelectorAll('.menu__item');

    function replacingStyles(e) {
        e.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.toggle('menu_active');
                hamburger.classList.toggle('hamburger_active');
                document.body.style.overflow = "";
            });
        });
    };

    function clickHamburger(e) {
        e.addEventListener('click', () => {
            menu.classList.toggle('menu_active');
            hamburger.classList.toggle('hamburger_active');
            if (document.body.style.overflow == "hidden") {
                document.body.style.overflow = "";
            } else {
                document.body.style.overflow = "hidden"
            }
        });
    };

    replacingStyles(link);
    clickHamburger(hamburger);

    new WOW().init();


    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: false,
        nav: false,
        speed: 1300
    });

    document.querySelector('.prev').addEventListener('click', function () {
        slider.goTo('prev');
    });
    document.querySelector('.next').addEventListener('click', function () {
        slider.goTo('next');
    });

    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }
});
