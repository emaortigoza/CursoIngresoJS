function mostrar()
{

	var contador=0;
	var acumulador=0;
  var respuesta="si";
  var numero;
  var promedio;

  while (respuesta == "si" ) {
    numero= parseInt(prompt("ingrese un numero : "));
    acumulador= acumulador + numero;
    contador ++;

    respuesta = prompt("desea continuar ? ");
  }
promedio=acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN
