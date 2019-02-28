function mostrar()
{
    var num;
    var contador= 0;

    do {
     num= parseInt(prompt("Ingrese un numero :"));
     } while (isNaN(num));

for(var i=1  ;i <= num ; i++  ){

       if(i % 2== 0 ){
        console.log(i);
        contador++     
}
console.log(contador);
}



}//FIN DE LA FUNCIÓN