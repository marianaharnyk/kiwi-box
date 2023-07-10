(function () {
    const iconBurger = document.querySelector(".menu__burger-dash");
    const navBody = document.querySelector(".menu-small");
    iconBurger.addEventListener("click", function (e) {
        document.body.classList.toggle("lock");
        iconBurger.classList.toggle("active");
        navBody.classList.toggle("active");
    });

    const navLinks = document.querySelectorAll(".menu-small__link");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", () => {
            if (iconBurger.classList.contains("active")) {
                document.body.classList.remove("lock");
                iconBurger.classList.remove("active");
                navBody.classList.remove("active");
            }
        });
    });

    new Carousel(document.getElementById("myCarousel"),{
        Autoplay : {
            timeout : 2000
        }
    }, {
        Autoplay
    });

    Fancybox.bind('[data-fancybox]', {
    });

    $("form[name='emailForm']").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            email: "Please enter a valid email address"
        },
        submitHandler: function(form, event) {
            event.preventDefault();
            if ($(form).valid()) {
                Fancybox.show([{src: "#dialog-content", type: "inline"}]);
                form.reset();
            }
        }
    });

    const closeButton = document.querySelector(".modal__button");
    closeButton.addEventListener("click", function (e) {
        Fancybox.bind('[data-fancybox]', {
        });
        Fancybox.close();
    });


})();