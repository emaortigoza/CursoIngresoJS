/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var alambre;

largo= parseInt(document.getElementById("Largo").value);
ancho=  parseInt(document.getElementById("Ancho").value);
alambre= (2*largo + 2*ancho)*3;

alert("La cantidad de alambre a comprar es de : " + alambre + " metros");

}
function Circulo () 
{
	var radio;
    var alambre;
    radio= parseInt(document.getElementById("Radio").value);
    alambre= radio*3;

    alert("La cantidad de alambre a comprar es de : " + alambre + " metros");
}
function Materiales () 
{
var largo;
var ancho;
var perimeto;
var b_cemento;
var b_cal;

largo= parseInt(document.getElementById("Largo").value);
ancho=  parseInt(document.getElementById("Ancho").value);
perimetro= (2*largo + 2*ancho);

b_cemento= perimetro *2;
b_cal= perimetro*3;

alert("Se necesitan " + b_cemento + " bolsas de cemento y " + b_cal + " de bolsas de cal para las medidas del terreno rectangular");




}