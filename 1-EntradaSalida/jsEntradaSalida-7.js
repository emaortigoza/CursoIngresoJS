/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var num_1;
var num_2;
var resultado;
function sumar()
{	
	 num_1 = parseInt(document.getElementById("numeroUno").value);
     num_2 = parseInt(document.getElementById("numeroDos").value);

     resultado = num_1 + num_2;

     alert("La suma es " + resultado);
}

function restar()
{
	num_1 = parseInt(document.getElementById("numeroUno").value);
     num_2 = parseInt(document.getElementById("numeroDos").value);

     resultado = num_1 - num_2;

     alert("La resta es " + resultado);
}

function multiplicar()
{ 
	num_1 = parseInt(document.getElementById("numeroUno").value);
     num_2 = parseInt(document.getElementById("numeroDos").value);

     resultado = num_1 * num_2;

     alert("La multiplicacion es " + resultado);
}

function dividir()
{
	num_1 = parseInt(document.getElementById("numeroUno").value);
     num_2 = parseInt(document.getElementById("numeroDos").value);

     resultado = num_1 / num_2;

     alert("La division es " + resultado);
}

