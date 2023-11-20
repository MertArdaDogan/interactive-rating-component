var rating          = document.querySelectorAll(".ratings span");
var btn             = document.querySelector(".btn");
var select          = document.getElementById("selected");
var rating_container= document.querySelector(".rating-container");
var thank_container = document.querySelector(".thank-container");
let rate = null;

//  Bu kod, rating elementlerinin tıklanabilir olmasını ve tıklanan elementin checked class'ını almasını sağlar
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

//  if" ifadesi ile "rate" adında bir değişken kontrol edilir. Eğer "rate" değişkeni bir değere sahipse, "select" adında bir nesnenin içeriğini "rate" değişkeniyle günceller.
//  "innerText" özelliği, bir nesnenin içeriğini değiştirmek için kullanılır. Bu durumda, "select" nesnesinin içeriği "rate" değişkeninin değeriyle değiştirilir
//  ve none class'ını rating_container isimli elemana ekler görünmez hale getirir.
//  none class'ını rating thank_container isimli elemana ekler görünür hale getirir.
btn.addEventListener("click", () =>{
    if (rate) {
        select.innerText = rate;
        rating_container.classList.add("none");
        thank_container.classList.remove("none");
    }
});