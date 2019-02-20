function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Julio":
    case "Agosto":
    alert("Abrigate que hace frio");   
        break;
    case "Abril":
    case "Mayo":
    case "Junio":
    alert("Falta poco para el invierno");
    break;    

    default:
    alert("Ya pasamos el frio, ahora el calor");
        break;
}




}//FIN DE LA FUNCIÓN