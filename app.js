//alert ("Hola Mundo"); //mensaje de alerta en JS
// Buena practica: declarar las variables al inicio del programa 

// existen 3 tipos de variables; var, let y const
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1; // funciones de JS anidadas
let numeroDeUsuario = 0;

let intentos = 1;//variable en 1 para contador de intentos
/* let palabraVeces = "vez"; */ //la palabra "vez" predeterminada
let maximosIntentos = 3;

/* console.log(typeof(numeroSecreto)); */ //typeof nos permite ver el tipo de dato, en este caso en la consola

  while(numeroDeUsuario != numeroSecreto){//while encierra un bucle, y puede contener código "hijo" en su interior
    numeroDeUsuario = parseInt(prompt(`Me indicas un número entre 1 al ${numeroMaximoPosible}, por favor:`)); //prompt es la entrada de texto

    console.log(numeroDeUsuario);// me muestra en la consola el número que ingresó el usuario 
    /* 
    Este código, dentro del condicional if, 
    utiliza el operador de igualdad == para comparar 
    las dos variables e compara si son iguales :)
    */
    if (numeroDeUsuario == numeroSecreto) {// las llaves {} son contenedores de bloques de código
      alert(`Acertaste, el número es: ${numeroDeUsuario}. Intentaste acertar ${intentos} ${intentos == 1 ? "vez" : "veces"}`); /* las tildes invertidas le indican a JS que colocamos dentro Template Strings ${} y operadores ternarios */
    //la fórmula del operador ternario: condicion ? valor si es verdadero : valor si es falso
    } else {
      if(numeroDeUsuario > numeroSecreto){//condicionales anidados
        alert("Ayuda: El número secreto es menor");
      } else{
        alert("Ayuda: El número secreto es mayor");
      }
      //incrementamos el contador cuando el usuario no acierta
      intentos++; //también puede ir esta linea arriba de if(numeroDeUsuario == numeroSecreto)
      /* también se puede escribir "intentos =+ 1;" o "intentos = intentos + 1;" */ 
      
      /* palabraVeces = "veces"; */// la palabra "vez" cambia a "veces" cuando son más de 1 intentos

      if(intentos > maximosIntentos){
        alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
        break;
      }
      // alert ("Lo siento, no acertaste el número");
    }
  }
