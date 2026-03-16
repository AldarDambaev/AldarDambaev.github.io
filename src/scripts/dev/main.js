(function() {
    "use strict";
    const root = document.documentElement;
    const navToggle = document.querySelector("#js-navToggle");

    if (navToggle) {
        navToggle.addEventListener("click", function(){
            root.classList.toggle("show-nav");
        });
    }

    // ===== ПОПАП =====
    const eventPP = document.querySelector("#js-eventPP");
    if (eventPP) {
        const eventOpenBtn = document.querySelector("#js-eventOpenBtn");
        const closeButtons = document.querySelectorAll(".js-ppCloseBtn, .form__close-btn");
        
        // Функция открытия попапа
        const openEventPP = function() {
            root.classList.add("show-event-popup");
            eventPP.style.display = "block"; // Показываем попап
            document.addEventListener("keyup", closeOnEscape);
        };
        
        // Функция закрытия попапа
        const closeEventPP = function() {
            root.classList.remove("show-event-popup");
            eventPP.style.display = "none"; // Скрываем попап
            document.removeEventListener("keyup", closeOnEscape);
        };
        
        // Закрытие по Escape
        const closeOnEscape = function(event) {
            if (event.key === "Escape") {
                closeEventPP();
            }
        };
        
        // Закрытие по клику на крестик или кнопку "Закрыть"
        closeButtons.forEach(btn => {
            btn.addEventListener("click", closeEventPP);
        });
        
        // Закрытие по клику на фон (оверлей)
        eventPP.addEventListener("click", function(event) {
            if (event.target === eventPP) {
                closeEventPP();
            }
        });
        
        // Открытие по клику на кнопку
        if (eventOpenBtn) {
            eventOpenBtn.addEventListener("click", function(event) {
                event.preventDefault();
                openEventPP();
            });
        }
    }

    // ===== SWIPER =====
    let swipers = document.querySelectorAll(".js-swiper");
    
    if (swipers.length > 0 && typeof Swiper !== 'undefined') {
        swipers.forEach(function(swpr){
            new Swiper(swpr, {
                updateOnWindowResize: true,
                slidesPerView: "auto",
                freeMode: true,
                spaceBetween: 0,
                speed: 500,
                grabCursor: true,
                pagination: {
                    el: swpr.querySelector(".swiper-pagination"),
                    clickable: true
                },
                navigation: {
                    nextEl: swpr.querySelector(".swiper-arrow-next"),
                    prevEl: swpr.querySelector(".swiper-arrow-prev"),
                    disabledClass: "arrow--disabled"
                }
            });
        });
    }
    
const jsSelectric = $(".js-selectric");
if (jsSelectric.length  > 0) {
        jsSelectric.selectric({
            nativeOnMobile: false
        })
    }

const mobileMask = $(".js-mobileMask");
if (mobileMask.length > 0) {
    mobileMask.mask('+7 (000) 000 00 00', { placeholder:"+7 (___) ___ __ __"})
}
    
})();



