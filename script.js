//arreglo.lenght para saber el tamaño del arreglo
var participantes = [];
var gastos = [];
var boton = document.getElementById("boton");
var a;
var promedio = document.getElementById("promedio");
var lugar_promedio = document.createElement("p");
promedio.appendChild(lugar_promedio);
var i;
function ArrayAvg(gastos) {
  var j = 0;
  var summ = 0;

  for (j = 0; j <= gastos.length - 1; j++) {
    summ = summ + gastos[j];
  }
  return summ / gastos.length;
}

boton.addEventListener("click", function () {
  let participante = document.getElementById("participante").value;
  participantes.push(participante);
  let gasto = document.getElementById("gasto").value;
  gastos.push(parseInt(gasto));
  a = ArrayAvg(gastos);

  // variables a mostrar
  var persona = document.createElement("div");
  var nombre = document.createElement("p");
  var costo = document.createElement("p");

  var resultados = document.getElementById("resultados");

  var cerrar = document.createElement("button");
  //Indico la clase que van a tener los elementos html que estoy creando
  persona.className = "persona";
  nombre.className = "nombre";
  costo.className = "costo";
  lugar_promedio.className = "promedio";
  cerrar.className = "cerrar";

  for (i = 0; i <= participantes.length - 1; i++) {
    nombre.innerHTML = participantes[i]; //Este es para agragar cualquier tipo de dato. Escribo entre etiquetas <p >ESCRIBO ACA</p>
    costo.innerHTML = gastos[i];
    persona.appendChild(nombre);
    persona.appendChild(costo);
    cerrar.id = i;
    persona.appendChild(cerrar); //Boton de cerrar usuario
    persona.id= i;
    resultados.appendChild(persona); //Este es para agregar nodos, y borra lo anterior y vuelve a escribir
  }
  lugar_promedio.innerHTML = a;
  //Lo que hace al hacer click en boton cerrar usuario
  cerrar.addEventListener("click", function () {
    console.log("HALLO");
    console.log(i);
    console.log("Participantes: " + participantes);
    //let num=i;
    // for (let i = num; i <= participantes.length-1; i++) {
    // participantes[i]=participantes[i+1];
    //gastos[i]=gastos[i+1];
    participantes.splice(cerrar.id, 1); //Elimino un solo elemento en la posicion del array i-1
    console.log("Participantes: " + participantes);
    
    if (persona.id === cerrar.id) {
      resultados.removeChild(persona) // elimina el hijo que se indica entre paréntesis
    }

  });
});

