function mostrar()
{
    var num;
    var contador= 0;

    do {
     num= parseInt(prompt("Ingrese un numero :"));
     } while (isNaN(num));

     for(var i=2  ;i < num ; i++  )
     {if(num % i == 0 ){
         contador++
         break;
     }



     }

}//FIN DE LA FUNCIÓN   