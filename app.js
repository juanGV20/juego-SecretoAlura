
//Declaro variable
let numeroSecreto = 0;
let listaNumeroGenerado = [];
let numeroMaximoJuegos = prompt("Por favor indique el numero maximo de juego que desea realizar");
let numeroIntentos = 1;




function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function limpiarCaja(){
    //Selecciono la caja de texto y le doy el valor vacío
    
    let valorCaja = document.querySelector('#intentoUsuario')
    valorCaja.value= "";
    return;
    
   document.querySelector('#intentoUsuario').value = ""; //Forma corta
}
function mensajesIniciales(){ 
    asignarTextoElemento('h1','Bienvenido al juego del numero secreto');
    asignarTextoElemento('p',`Indica cual crees que es el numero secreto entre 1 y 10`);
    numeroSecreto = generarNumeroSecreto();
    return;
}
function nuevoJuego(){
    //Reinicia el numero de intentos
    numeroIntentos = 1;
    //Genera un nuevo numero secreto
    //Limpia la caja del input
    limpiarCaja();
    //indicar mensaje de inicio
    mensajesIniciales();
    //Desactivar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    //Activar el botón para introducir el intento del usuario
    document.querySelector('#intentar').removeAttribute('disabled');
    return;
}


function verificarIntento (){
    valorUsuario = parseInt(document.getElementById('intentoUsuario').value); 

    console.log(numeroSecreto);
    //Verificar tipo de variable de valorUsuario 
    //console.log(typeof(valorUsuario));
   
    if (numeroSecreto === valorUsuario){
        asignarTextoElemento('p',`Felicidades acerstaste el numero secreto en ${numeroIntentos} ${(numeroIntentos === 1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled','true');
        
        }else{
                if (valorUsuario > numeroSecreto) {
                    asignarTextoElemento('p', 'El número es menor');
                    
                } else { 
                    asignarTextoElemento('p','El número es mayor');
                    
            }
        numeroIntentos++;
        limpiarCaja();    
    }

    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    console.log(listaNumeroGenerado)
    if(listaNumeroGenerado.length == numeroMaximoJuegos){
            asignarTextoElemento('p','Usted realizo el numero maximo de juegos');
            document.getElementById('intentoUsuario').setAttribute('disabled','true');
            

     } else {
            if (listaNumeroGenerado.includes(numeroGenerado)){
                //si la respuestas es true o positiva(si el valor esta en la lista)
                return generarNumeroSecreto();
            } else {
                //si la respuesta es false o negativa(Si el valor no esta en la lista)
                listaNumeroGenerado.push(numeroGenerado);
                return numeroGenerado;
            }
    }
    
}

mensajesIniciales();

