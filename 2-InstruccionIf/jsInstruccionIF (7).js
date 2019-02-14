function mostrar()
{var edad;
    var e_civil;

edad= parseInt(document.getElementById("edad").value);
e_civil =document.getElementById("estadoCivil").value;

if (edad <18 && e_civil !="Soltero") 
{
    alert("ES muy pequeño para NO ser soltero");
    
}

	


}//FIN DE LA FUNCIÓN