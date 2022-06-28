let btnEnviar = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let dato = document.getElementById("dato");

rotulo.innerHTML = "Indique puesto: ";

btnEnviar.addEventListener("click", () => {
  let puesto1: number = "1";
  let puesto2: number = "2";
  let puesto3: number = "3";
  let ingreso: number = Number(dato.value);

    switch(ingreso){
      case 1 :
          console.log("Ganador medalla de oro");
          break;
      case 2 :
          console.log("Ganador medalla de Plata");
          break;
      case 3 :
          console.log("Ganador medalla de Bronce"); 
          break;

          default
          console.log("Entregar certificado de participacion");

    }
 
});
