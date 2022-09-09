let antiguedad= parseInt(prompt("Ingrese su antiguedad en años"));
let diasTomados= parseInt(prompt("Ingrese días de vacaciones tomados en el año"));


function calculadoraLicencias(añosTrabajados, diasTomados){
    if(antiguedad<5){
        return (14 - diasTomados);
    }else if(antiguedad>=5 && antiguedad<14){
        return (21 - diasTomados);
    }else if(antiguedad>=14 && antiguedad<21){
        return (28 - diasTomados);
    }else{
        return (35 - diasTomados);
    }
}
            
let resultado= calculadoraLicencias(antiguedad, diasTomados);
let mensaje= `Le corresponden ${resultado} días de vacaciones`;
alert(mensaje);  
 

