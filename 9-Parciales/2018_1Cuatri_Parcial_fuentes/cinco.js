function mostrar()
{
var planeta;
planeta = prompt("Ingrese un planeta del sistema solar : ");

switch (planeta) {
    case "tierra":
        alert ("Aca vivimnos");
    
        break;
    case "mercurio":
    case  "venus":
        alert ("aca hace mas calor");

        break;
    case "marte":
    case "jupiter":
    case "nepturno":
    case "urano":
        alert("aca hace mas frio");
        break;

         default:
         alert("Ese planeta no corresponde al sistema solar");
        break;
}
}
