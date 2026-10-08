const elemen = document.querySelectorAll(".project, .hire, .card");

elemen.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
        item.classList.add("pop");
    });

    item.addEventListener("mouseleave", function () {
        item.classList.remove("pop");
    });
});