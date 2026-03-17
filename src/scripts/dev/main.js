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
         const openEventPP = function() {
            root.classList.add("show-event-popup");
            eventPP.style.display = "block";
            document.addEventListener("keyup", closeOnEscape);
        };
         const closeEventPP = function() {
            root.classList.remove("show-event-popup");
            eventPP.style.display = "none";
            document.removeEventListener("keyup", closeOnEscape);
        };
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
    if (jsSelectric.length > 0) {
        jsSelectric.selectric({
            nativeOnMobile: false
        });
    }
    const mobileMask = $(".js-mobileMask");
    if (mobileMask.length > 0) {
        mobileMask.mask('+7 (000) 000 00 00', { 
            placeholder: "+7 (___) ___ __ __" 
        });
    }
     if (typeof AirDatepicker !== 'undefined') {
        const dateField = $(".js-dateField");

if (dateField.length) {
  const pickerInit = function (pick) {
    const dateInput = pick.find(".js-dateInput");
    const dateDay = pick.find(".js-dateDay");
    const dateMonth = pick.find(".js-dateMonth");
    const dateYear = pick.find(".js-dateYear");

    const dateConfig = {
      autoClose: true,
      minDate: new Date(),
      navTitles: {
        days: "MMMM <i>yyyy</i>"
      },
      onSelect: function ({ date }) {
        dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
        dateMonth.val(date ? ("0" + (date.getMonth() + 1)).slice(-2) : "");
        dateYear.val(date ? date.getFullYear() : "");
      }
    };
    new AirDatepicker(dateInput[0], dateConfig);
  };

  $.each(dateField, function (i) {
    pickerInit($(this));
  });
}
    }
    
})();



