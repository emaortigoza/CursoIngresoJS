function mostrar()
{
    var precio; var p_descuento; var precio_final; var total;

    precio= prompt("Ingrese un precio: ");
    precio=parseInt(precio);
    p_descuento = prompt("Ingrese el porcentaje de descuento: ");
    p_descuento =parseInt(p_descuento);

    precio_final = precio * p_descuento/100;

    total= precio - precio_final
    document.getElementById("elPrecioFinal").value = total;
    
}
