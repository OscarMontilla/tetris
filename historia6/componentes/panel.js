import { models } from "./models";
import { ModeloPieza } from "../funciones/clases";
import { ranking } from "../vistas/ranking";
import { juego } from "../vistas/juego";

export const panel = {
  matriz: [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],


  
  // Función para pintar el panel de juego
pintaPanel: () => {
  // Selecciona el elemento del panel en el DOM
  const panelElement = document.querySelector('#panel');
  // Limpia el contenido del panel
  panelElement.innerHTML = '';

  // Itera sobre las filas de la matriz del panel
  for (let fila = 0; fila < panel.matriz.length - 1; fila++) {
      // Crea un contenedor para las celdas de la fila actual
      let divFilas = '<div class="fila" style="display: flex; justify-content: center;">';

      // Itera sobre las columnas de la matriz del panel
      for (let columna = 1; columna < panel.matriz[fila].length - 1; columna++) {
          let divCeldas = '';
          // Verifica el valor de la celda en la matriz y establece el color de fondo correspondiente
          if (panel.matriz[fila][columna] === 0) {
              divCeldas += '<div class="celda" style="background-color: #343a40; border: 1px solid black"></div>';
          } else {
              divCeldas += '<div class="celda" style="background-color: #007bff; border: 1px solid black"></div>';
          }
          // Agrega la celda al contenedor de filas
          divFilas += divCeldas;
      }
      // Cierra el contenedor de filas
      divFilas += '</div>';
      // Agrega las filas al panel
      panelElement.innerHTML += divFilas;
  }
},

// Función para borrar una pieza del panel
borrarPieza: () => {
  // Verifica si hay una nueva pieza en el panel
  if (panel.nuevaPieza) {
      // Itera sobre la altura y longitud de la nueva pieza
      for (let i = 0; i < panel.nuevaPieza.altura; i++) {
          for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
              const elemento = panel.nuevaPieza.matriz[i][x];
              // Si hay un elemento en la nueva pieza, lo borra de la matriz del panel
              if (elemento) {
                  panel.matriz[i + panel.nuevaPieza.y][x + panel.nuevaPieza.x] = 0;
              }
          }
      }
      // Vuelve a pintar el panel después de borrar la pieza
      panel.pintaPanel();
  }
},

// Función para crear una nueva pieza
crearNuevaPieza: () => {
  // Genera un número aleatorio para seleccionar un modelo de pieza
  const aleatorioModelo = Math.floor(Math.random() * 7);
  
  // Obtiene el ancho de la pieza seleccionada
  const ancho = models[aleatorioModelo].matriz[0].length;
  
  let aleatorioX;
  // Establece una posición aleatoria inicial en el eje X según el ancho de la pieza
  switch (ancho) {
      case 1:
          aleatorioX = Math.floor(Math.random() * 10);
          break;
      case 2:
          aleatorioX = Math.floor(Math.random() * 9);
          break;
      case 3:
          aleatorioX = Math.floor(Math.random() * 8);
          break;
      case 4:
          aleatorioX = Math.floor(Math.random() * 7);
          break;
  }
  
  // Crea una nueva instancia de ModeloPieza con la pieza aleatoria generada
  const pieza = new ModeloPieza(aleatorioModelo, aleatorioX, 1, 0);
  // Asigna la nueva pieza al panel
  panel.nuevaPieza = pieza; 
  return pieza;
},

// Función para insertar una pieza en el panel
insertarPieza: () => {
  // Itera sobre la altura y longitud de la nueva pieza
  for(let i=0; i<panel.nuevaPieza.altura; i++){
      for(let x=0; x<panel.nuevaPieza.longitud; x++){
          const elemento = panel.nuevaPieza.matriz[i][x];
          // Si hay un elemento en la nueva pieza, lo inserta en la matriz del panel
          if(elemento){
              panel.matriz[i + panel.nuevaPieza.y][x + panel.nuevaPieza.x] = elemento;
          }
      }
  }
  // Vuelve a pintar el panel después de insertar la pieza
  panel.pintaPanel();
},

// Función para mover la pieza hacia la derecha
moverDra: () => {
  // Verifica si hay una nueva pieza en el panel
  if (panel.nuevaPieza) {
      // Verifica si el movimiento hacia la derecha no supera el límite del panel
      if((panel.nuevaPieza.x + panel.nuevaPieza.longitud)<11){
          // Borra la pieza actual del panel
          panel.borrarPieza();
          // Mueve la pieza hacia la derecha
          panel.nuevaPieza.x ++
          // Inserta la pieza movida en el panel
          panel.insertarPieza();
          // Vuelve a pintar el panel después de mover la pieza
          panel.pintaPanel()
      }
  }
},

// Función para mover la pieza hacia la izquierda
moverIzq: () => {
  // Verifica si hay una nueva pieza en el panel
  if (panel.nuevaPieza) {
      // Verifica si el movimiento hacia la izquierda no supera el límite del panel
      if(panel.nuevaPieza.x >1){
          // Borra la pieza actual del panel
          panel.borrarPieza();
          // Mueve la pieza hacia la izquierda
          panel.nuevaPieza.x --
          // Inserta la pieza movida en el panel
          panel.insertarPieza();
          // Vuelve a pintar el panel después de mover la pieza
          panel.pintaPanel()
      }
  }
},

// Función para hacer bajar la pieza
bajar() {
    let llegoAbajo = false; // Variable para verificar si la pieza llega abajo
    for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
        if (panel.matriz[panel.nuevaPieza.y + panel.nuevaPieza.altura][panel.nuevaPieza.x + x] == 1) {
            llegoAbajo = true; // La pieza llegó abajo
            panel.insertarPieza();
            panel.nuevaPieza = panel.crearNuevaPieza();
            break;
        }
    }

    if (llegoAbajo) { 
      panel.puntos += 50;
      console.log('Puntos', this.puntos);
      const guardarPartida = document.querySelector('#juego');
      guardarPartida.innerHTML = guardar.template

      const btnGuardar = document.querySelector('#btnGuardar');
      const btnCancelar = document.querySelector('#btnCancelar');
     
      btnGuardar.addEventListener('click', () => {
        const inputNick = document.querySelector('#nick').value;
        panel.nick = inputNick


        const vistaRanking = document.querySelector('main');
        vistaRanking.innerHTML = ranking.template;
        ranking.script()
    });
    

      btnCancelar.addEventListener('click',()=>{
        guardarPartida.innerHTML = juego.template
      })  
      
    } else { // Si no llegó abajo, sigue bajando la pieza
        panel.borrarPieza();
        panel.nuevaPieza.y += 1;
        panel.puntos += 10; // Incrementa puntos en 10
    }

    console.log('Puntos:', panel.puntos); // Muestra los puntos en la consola
    panel.insertarPieza();
    panel.pintaPanel();
},


  // Función para iniciar el movimiento automático de la pieza hacia abajo
iniciarMovimiento: () => {
  // Establece un intervalo que llama a la función de bajar la pieza cada 1000 milisegundos (1 segundo)
  panel.movimientoInterval = setInterval(() => {
      panel.bajar();
  }, 1000);
},

// Función para controlar las teclas presionadas por el usuario
controlTeclas: () => {
  // Agrega un evento de escucha para cuando se presiona una tecla
  document.addEventListener("keydown", (event) => {
      // Evalúa qué tecla se presionó
      switch (event.key) {
          // Si se presiona la flecha izquierda, mueve la pieza hacia la izquierda y registra en la consola
          case "ArrowLeft":
              panel.moverIzq();
              console.log('izquierda');
              break;
          // Si se presiona la flecha derecha, mueve la pieza hacia la derecha y registra en la consola
          case "ArrowRight":
              panel.moverDra();
              console.log('derecha');
              break;
          // Si se presiona la flecha abajo, hace descender la pieza más rápidamente y registra en la consola
          case "ArrowDown":
              panel.bajar();
              console.log('abajo');
              break;
          // Si se presiona la flecha arriba, borra la pieza actual, la gira y la inserta nuevamente, luego registra en la consola
          case "ArrowUp":
              panel.borrarPieza();
              panel.nuevaPieza.girar();
              panel.insertarPieza();
              console.log('arriba');
              break;
          // Por defecto, no hace nada
          default:
              break;
      }
  });
},
  
};



