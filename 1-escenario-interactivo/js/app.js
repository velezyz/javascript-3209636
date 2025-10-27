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




/*captura variable */
const jugadore = document.querySelectorAll('.tata');
const scoren = document.querySelector('.score2');

console.log(scoren);
console.log(jugadore);
let y = 0;



/*crear las funciones*/
jugadore.forEach( item => {
    console.log("elemento: ", item);
    
    
    item.addEventListener("click", () => {
        item.classList.add("saltar")
        y++
        scoren.textContent = `Score: ${y}`
 
    })

    item.addEventListener("animationend", () => {
        item.style.display = "none"
   }, {once: true})     


});

/*captura variable */
const score3 = document.querySelector('.score3');
const gok = document.querySelectorAll('.gok');

console.log(score3);
console.log(gok);
let k = 0;

/*crear las funciones*/
gok.forEach( item => {
    console.log("elemento: ", item);
    
    
    item.addEventListener("click", () => {
        item.classList.add("saltar")
        k++
        score3.textContent = `Score: ${k}`
 
    })

    item.addEventListener("animationend", () => {
        item.style.display = "none"
   }, {once: true})     


});




