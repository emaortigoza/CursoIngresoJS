/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
   var num_1;
   var num_2;
   var suma;

   num_1 = parseInt(document.getElementById("numeroUno").value);
   num_2 = parseInt(document.getElementById("numeroDos").value);

   suma = num_1 + num_2;

   alert("La suma es " + suma);

}

