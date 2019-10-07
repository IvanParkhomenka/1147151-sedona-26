var link = document.querySelector(".search-btn");
var popup = document.querySelector(".form-search");
var dateIn = popup.querySelector("[name=date-in]");

popup.classList.add("form-search-hide");
link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("form-search-show");
    dateIn.focus();
});