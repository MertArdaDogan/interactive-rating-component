var rating          = document.querySelectorAll(".ratings span");
var btn             = document.querySelector(".btn");
var select          = document.getElementById("selected");
var rating_container= document.querySelector(".rating-container");
var thank_container = document.querySelector(".thank-container");
let rate = null;

// Sayıları (ratings) seçmek için 
rating.forEach((rating) => {
    rating.addEventListener("click", (m) => {
        var active=document.querySelector('.checked');
        if(active) {
            active.classList.remove("checked")
        }
        var card = m.target;
        card.classList.add("checked");
        rate = m.target.innerText;
    })
})

btn.addEventListener("click", () =>{
    if (rate) {
        select.innerText = rate;
        rating_container.classList.add("none");
        thank_container.classList.remove("none");
    }
});