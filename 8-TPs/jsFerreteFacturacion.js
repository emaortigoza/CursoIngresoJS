/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{var precio_uno;
 var precio_dos; 
 var precio_tres;
 var suma;
 precio_uno= parseInt(document.getElementById("PrecioUno").value);
 precio_dos=parseInt(document.getElementById("PrecioDos").value);
 precio_tres=parseInt(document.getElementById("PrecioTres").value);


 suma= precio_uno + precio_dos + precio_tres;

 alert("La suma de los precios es: " + suma);
}
function Promedio () 
{
 var precio_uno;
 var precio_dos; 
 var precio_tres;
 var suma;
 var promedio;
 precio_uno= parseInt(document.getElementById("PrecioUno").value);
 precio_dos=parseInt(document.getElementById("PrecioDos").value);
 precio_tres=parseInt(document.getElementById("PrecioTres").value);

 suma= precio_uno + precio_dos + precio_tres;
 promedio = suma/3;

 alert("Su promedio es: " + promedio);

}
function PrecioFinal () 
{
 var precio_uno;
 var precio_dos; 
 var precio_tres;
 var suma;
 var iva;
 var precio_final;
 precio_uno= parseInt(document.getElementById("PrecioUno").value);
 precio_dos=parseInt(document.getElementById("PrecioDos").value);
 precio_tres=parseInt(document.getElementById("PrecioTres").value);

 suma= precio_uno + precio_dos + precio_tres;

 iva= suma *21/100;

 precio_final= suma + iva;

 alert("El precio final (mas iva de 21%) es: " + precio_final);
}