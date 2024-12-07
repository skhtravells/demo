(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('templeTourForm');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const datetime = document.getElementById('datetime').value.trim();
            const destination = document.getElementById('destination').value.trim();
            const message = document.getElementById('message').value.trim();

            // WhatsApp number
            const whatsappNumber = 'YOUR_WHATSAPP_NUMBER'; // Replace with your WhatsApp number

            // Create WhatsApp message
            const whatsappMessage = `Hello,%20I%20would%20like%20to%20book%20a%20Temple%20Tour.%0A%0A` +
                                    `*Name:*%20${name}%0A` +
                                    `*Email:*%20${email}%0A` +
                                    `*Date%20&%20Time:*%20${datetime}%0A` +
                                    `*Destination:*%20${destination}%0A` +
                                    (message ? `*Special%20Request:*%20${message}%0A` : '') +
                                    `%0AThank%20you!`;

            // Redirect to WhatsApp
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
            window.open(whatsappUrl, '_blank');
        });
    });

    document.querySelector('.btn-outline-light').addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector('#booking-form');
        target.scrollIntoView({ behavior: 'smooth' });
    });

    // Automatically advance slides every 3 seconds
    var carouselElement = document.getElementById('templeCarousel');
    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, // 3 seconds
        ride: 'carousel'
    });







