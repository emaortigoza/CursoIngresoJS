function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Enero":
        alert("Que tengas un buen año! ");	
        break;
    case "Marzo": 
        alert("A clases");
     break;
    case "Julio":
        alert("Se vienen las vacaciones");
        break;
        case "Diciembre":
        alert("Felices fiestas");
        break;
    default:
    alert("chinwewncha");
        break;
}



}//FIN DE LA FUNCIÓN