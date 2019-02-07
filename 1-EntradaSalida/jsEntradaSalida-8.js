/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	 var num_1;
   var num_2;
   var resto;

   num_1 = parseInt(document.getElementById("numeroDividendo").value);
   num_2 = parseInt(document.getElementById("numeroDivisor").value);

   resto = num_1 % num_2;

   alert("El resto es " + resto);
}
