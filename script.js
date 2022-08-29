function alerta(){  
    alert("Loading weather report...")  //genera una alerta al hacer click
}

var botonAcep = document.querySelector(".cookies");

function aceptar(){
    botonAcep.remove();  //remueve la ventana de cookies
}



function c2f(temp) {  // función para cambiar de grados C a F
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) { //función para cambiar de grados F a C
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    /* console.log(element.value); */
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i); //buscará todos los elementos con id 'temp' + el número de variable.
        var tempVal = parseInt(tempSpan.innerText); // La función parseInt comprueba el primer argumento, una cadena, e intenta devolver un entero de la base especificada.
        if(element.value == "C°") {  // si el valor del elemento es igual a C
            tempSpan.innerText = f2c(tempVal); // mostrará los grados C
        } else {
            tempSpan.innerText = c2f(tempVal); // sino, mostrará los grados F
        }
    }
}