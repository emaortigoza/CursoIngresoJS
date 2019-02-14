function mostrar()
{var edad;
//tomo la edad  
edad= parseInt(document.getElementById("edad").value);
if (edad >=18) 
{
    alert("Usted es mayor ");
   }

else if(edad<13) 
{
    alert("Usted es un niño");
} 
else
 {
    alert("Usted es adolescente");
 }



}//FIN DE LA FUNCIÓN