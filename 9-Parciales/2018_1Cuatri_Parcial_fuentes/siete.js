function mostrar()
{ var nota;
    var sexo;
    var promedio;
    var acumulador_notas = 0;
    var nota_baja;
    var sexo_notabaja;
    var contadorvaron_6omas=0;
    var flag=0;
for (var i=0; i<5; i++){
    nota=prompt("Ingrese una nota : ");
    nota= parseInt(nota);
    while (nota<0 || nota>10) {
        nota= prompt(" Error. Vuelva a intentarlo");
    }
    sexo = prompt("Ingres f o m segun su sexo : ");
    while (sexo != "f" && sexo != "m") {
        sexo=prompt("Reintente");
    }

    acumulador_notas= acumulador_notas + nota;
    
    if (nota< nota_baja || flag == 0 ) {
        nota_baja = nota;
        sexo_notabaja = sexo;
        flag = 1;
    }
    if (sexo == "m" && nota >=6) {
        contadorvaron_6omas = contadorvaron_6omas + 1;
    }
    
}
promedio = acumulador_notas/5;

alert("El promedio de las notas es de : " + promedio +"/n"+ " Nota mas baja : " + nota_baja + "/n" + " Sexo de la persona que saco la nota mas baja : " + sexo_notabaja + "/n" + "Cantidad de varones :  " + contadorvaron_6omas );
}



