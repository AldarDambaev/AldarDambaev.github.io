(function() {
    "use script";
    const root = document.documentElement;
    const navToggle = document.querySelector("#js-navToggle");

    navToggle.addEventListener("click", function(){
        root.classList.toggle("show-nav");
    });

    const eventPP = document.querySelector("#js-eventPP");



    if (eventPP) {
        const eventOpenBtn = document.querySelector("#eventOpenBtn");

        const closeEventPP = function(event) {
            function close() {
            document.removeEventListener("keyup", closeEventPP);
            eventPP.removeEventListener("click", closeEventPP);
            root.classList.remove("show-event-popup");
        };

        switch (event.type) {
            case "keyup":
                if (event.key === "Escape" ) close();
                break;
                case "click":
                    if (event.target === this || event.target.classList.contains("js-ppCloseBtn")) {
                        close();
                        break;
                    }
        }
    };

        eventOpenBtn.addEventListener("click", function() {
            document.addEventListener("keyup", closeEventPP);
            event.addEventListener("click", closeEventPP);
        });


    }
})();