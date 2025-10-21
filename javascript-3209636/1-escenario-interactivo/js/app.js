/*captura variable */
const score = document.querySelector('.score');
const moneda = document.querySelectorAll('.coin');

console.log(score);
console.log(moneda);
let i = 0;

/*crear las funciones*/
moneda.forEach( item => {
    console.log("elemento: ", item);
    
    
    item.addEventListener("click", () => {
        item.classList.add("saltar")
        i++
        score.textContent = `Score: ${i}`
 
    })

    item.addEventListener("animationend", () => {
        item.style.display = "none"
   }, {once: true})     




});

