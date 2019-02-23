function mostrar()
{

	var contador=0;
	//declarar contadores y variables
  var numero;
  //var positivo;
  var p_acumulado=0;
  var p_contador=0;
  //var negativo;
  var n_acumulador=0;
  var n_contador=0;
  var c_ceros=0;
  var par_contador=0;
  var promedio_n;
  var promedio_p;
  var respuesta="si";
  var dif;


  do {
   do {
     numero= parseInt(prompt("Ingrese un numero :"));
     } while (isNaN(numero));
    if (numero > 0) {
      p_acumulado = p_acumulado + numero;
      p_contador++;
    }
    if (numero == 0)  {
      c_ceros ++;
      //n_acumulador = n_acumulador + numero;
      //n_contador ++;
     }
     else {
       n_acumulador = n_acumulador + numero;
      n_contador ++;
       }
     if (numero % 2 == 0) {
       par_contador = par_contador + numero;
     }
     respuesta = confirm("Desea continuar? ");

	}while(respuesta);

promedio_p = p_acumulado / p_contador;
promedio_n = n_acumulador / n_contador;
dif =p_contador - n_contador;
document.write("suma de positivos: " + p_acumulado + "<br>"  + " Suma de negativos : " + n_acumulador + "<br>" + "cantidad de positivos : " + p_contador + "<br>" + "cantidad de negativos : " + n_contador + "<br>" + "cantidad de ceros : " + c_ceros + "<br>" + "cantidad de numeros pares : " + par_contador + "<br>" + " promedio positivos " + promedio_p + "<br>"+ " promedio negativos : " + promedio_n + "<br>"+ "diferencia entre positivos y negativos " + dif  );

//CORREGIR
}//FIN DE LA FUNCIÓN
