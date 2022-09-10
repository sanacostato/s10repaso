console.log("hola");
const bodyReference = document.querySelector("body");//el body es el nombre de la etiqueta

function btnCambioColor(){
    console.log("entro a boton")
    //setInterval(cambiaColor, 3000)//cambia de color automatico, sin darle al boton

    setTimeout(cambiaColor,3000) //settimeout manda a llamar a una funcion despues de 5000 milisegundos
   console.log("deberia ejecutar al FINAL del cambio de color");
    // cambiaColor();//llama la funcion de abajo asi podemos reutilizar la funcion cambia color
}

function cambiaColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16); // asi se usa para consegrui colores,l multiplicando por 16777215 y usando 16
    console.log("numero es:"+randomColor);
    bodyReference.style.backgroundColor = "#"+randomColor; // se pone el # porque el color con numeros lleva # anrtes
    
    
}
