function mostrar()
{
var precio;
var descuento;
var precio_final;

precio= prompt("Ingrese un precio: ");
precio = parseInt(precio);
descuento = prompt("Ingrese un porcentaje de descuento: ");
precio = parseInt(precio);
descuento = parseInt(descuento);
precio_final = precio*descuento/100;



document.getElementById("elPrecioFinal").value= precio_final
}
