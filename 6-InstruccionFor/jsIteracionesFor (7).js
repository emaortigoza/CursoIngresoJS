function mostrar()
{
    var num;
    var contador= 0;

    do {
     num= parseInt(prompt("Ingrese un numero :"));
     } while (isNaN(num));

for(var i=1  ;i <= num ; i++  ){

       if(num % 1== 0 ){
        contador++
        console.log(i);
    }




}//FIN DE LA FUNCIÓN