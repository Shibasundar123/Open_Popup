
const submitBtn = document.getElementById("submit");
const closeBtn = document.getElementById("close");
const popup = document.querySelector(".popup-container");

submitBtn.addEventListener("click",() => {
    popup.classList.add("popupActive");
})
closeBtn.addEventListener('click',() => {
    popup.classList.remove("popupActive");
})