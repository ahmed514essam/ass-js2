let btnsubmit = document.querySelector('.btn');
let form = document.querySelector('.con')
let inchinp = document.querySelector('.ahmed-inp')
let convertedinch = document.querySelector('.convertedahmed')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    ahmed();
})






function ahmed() {

    if (inchinp.value == "") {

        convertedinch.textContent = "";







    } else {
        convertedinch.textContent = (inchinp.value) + " ahmed = " +
            (inchinp.value * 0.0254) + " Meters "
    }
}