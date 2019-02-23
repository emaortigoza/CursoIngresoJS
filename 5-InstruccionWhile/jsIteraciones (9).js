function mostrar()
{

	var contador = 0;
  var numero;
  var maximo;
  var minimo;
	var respuesta="si";

  do{
    numero= parseInt(prompt("ingrese un numero : "));
    contador ++; //   o contador = contador + 1;(es lo mismo)
    if (contador == 1) {
      maximo = numero;
      minimo = numero;
    }
    if (numero > maximo) {
      maximo=numero;
    }
    if (numero < minimo) {
      minimo = numero;
    }

    respuesta = prompt("Desea continuar ? ");
   }while (respuesta == "si");

   document.getElementById("maximo").value=maximo;
   document.getElementById("minimo").value=minimo;




}//FIN DE LA FUNCIÓN
