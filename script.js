//arreglo.lenght para saber el tamaño del arreglo
var participantes = [];
var boton = document.getElementById("boton");
var a;
var promedio = document.getElementById("promedio");
var lugar_promedio = document.createElement("p");
//--------------------------
/*

var array= [
  {
  nombre:'Carlos',
  gasto:5.5
},
{
  nombre:'Carlos',
  gasto:5.5
}
];
array[0].
participante.nombre=document.getElementById(partic);
participante.gasto=document.getElementById(gast);
participantes.push(participante);*/
//--------------------------

promedio.appendChild(lugar_promedio);
var i;
function ArrayAvg(participantes) {
  var j = 0;
  var sum = 0;

  for (j = 0; j <= participantes.length - 1; j++) {
    sum = sum + participantes[j].gasto;
  }
  return sum / participantes.length;
}

boton.addEventListener("click", function () {
  var participante = {
    id: 0,
    nombre: "",
    gasto: 0,
  };
  participante.nombre = document.getElementById("participante").value;
  participante.gasto = parseInt(document.getElementById("gasto").value);
  participante.id = participantes.length;
  participantes.push(participante);
  a = ArrayAvg(participantes);
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
  if (participantes.length == 0) {
    a = 0;
  }
  for (i = 0; i <= participantes.length - 1; i++) {
    nombre.innerHTML = participantes[i].nombre; //Este es para agragar cualquier tipo de dato. Escribo entre etiquetas <p >ESCRIBO ACA</p>
    costo.innerHTML = participantes[i].gasto;
    persona.appendChild(nombre);
    persona.appendChild(costo);

    persona.appendChild(cerrar); //Boton de cerrar usuario

    resultados.appendChild(persona); //Este es para agregar nodos, y borra lo anterior y vuelve a escribir
  }
  lugar_promedio.innerHTML = a;
  //Lo que hace al hacer click en boton cerrar usuario
  cerrar.addEventListener("click", function () {
    participantes.splice(participante.id, 1); //Elimino un solo elemento en la posicion del array i-1

    a = ArrayAvg(participantes);
    lugar_promedio.innerHTML = a;
    resultados.removeChild(persona); // elimina el hijo que se indica entre paréntesis

    participantes.forEach((participante) => {
      participante.id = participantes.indexOf(participante); //indexof recorre el array y devuelve la posicion (la pocision se llama indice) en el que está lo que está escrito entre parentesis
    });

    console.log(participantes);
  });
});
