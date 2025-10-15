const botons = document.querySelectorAll("cambiarcolor");
let colorOriginal = document.body.style.backgroundColor || 'red';

boton.addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'blue') {
        document.body.style.backgroundColor = colorOriginal;
    } else {
        document.body.style.backgroundColor = 'blue';
    }
    });