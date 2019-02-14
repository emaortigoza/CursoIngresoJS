function mostrar()
{
var edad;
    var e_civil;

edad= parseInt(document.getElementById("edad").value);
e_civil =document.getElementById("estadoCivil").value;

if (edad >= 18 && e_civil == "Soltero") {
    alert("Es soltero y no es menor de edad");
}



}//FIN DE LA FUNCIÓN