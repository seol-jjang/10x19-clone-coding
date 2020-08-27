const numbers = document.querySelectorAll(".number");
const img = document.querySelector(".image");

function numberHover(e) {
    const number = e.target.innerText.split("#")[1];
    img.style.backgroundImage = `url("img/${number}.gif")`;
}

Array.from(numbers).forEach(number => {
    number.addEventListener("mouseover", numberHover);
});