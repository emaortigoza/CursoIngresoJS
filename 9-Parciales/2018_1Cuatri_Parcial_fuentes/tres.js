function mostrar()
{
var precio;
var descuento;
var precio_final;
var total;

precio= prompt("Ingrese un precio: ");
precio = parseInt(precio);
descuento = prompt("Ingrese un porcentaje de descuento: ");
precio = parseInt(precio);
descuento = parseInt(descuento);
precio_final = precio*descuento/100;

total= precio - descuento;

document.getElementById("elPrecioFinal").value= total;
}
