function mostrar()
{

  //var contador=0;
  //var acumulador=0
	var positivo=0;
	var negativo=1;
	var numero;
  var respuesta ="si";

  while (respuesta =="si") {
     numero= parseInt(prompt("ingrese un numero : "));
    if (numero > 0)  {
      positivo= positivo + numero;
    }
    else{
      negativo= negativo * numero;
    }

    respuesta = prompt("Desea continuar? ");
  }


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
