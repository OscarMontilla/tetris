export const vistaGuardar = {
    template: //html
    `
  <!-- Pantalla del juego -->

  <div id="guardar" class="mt-5  d-flex justify-content-center align-items-center">
  <div  class="bg-dark position-center p-2" style="">
      <h3>Quieres guardar la partida?</h3>
          <label for="nick">Nick:</label><br>
          <input type="text" id="nick" name="nick" required><br><br>
          <button id="btnGuardar">Guardar</button>
        <button id="btnCancelar">Cancelar</button>
   
  </div>
</div>
  
    `,
    script:()=>{
        
  
    }
}