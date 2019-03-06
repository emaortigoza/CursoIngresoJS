function mostrar()
{ var num_1; var num_2; var suma; var resta;
    
num_1= prompt("Ingrese un numero : ");
num_1= parseInt(num_1);
num_2= prompt("Ingrese un numero: ");
num_2= parseInt(num_2);

if (num_1 === num_2) {
    alert( num_1 + " y " +num_2);
}

if (num_1 > num_2) {
    resta= num_1 - num_2;
    alert("el resultado de la resta es :  " + resta );    
    } else {
        suma = num_1 + num_2;
        if (suma > 10) {
            alert(" La suma es " + suma + " y supero el 10 ");
        }
        
    }




}
