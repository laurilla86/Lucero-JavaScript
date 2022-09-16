class Persona{
    constructor(apellido, nombre, fechaIngreso, legajo, dni, categoria){
        this.apellido = apellido;
        this.nombre = nombre;
        this.Antiguedad = this.Antiguedad;
        this.legajo = legajo;
        this.dni = dni;
        this.categoria = categoria;
    }
}

const persona1 = new Persona("Lopez", "Maria", 8, "111","22.080.324", "Admin");
const persona2 = new Persona("Sanchez", "Amalia", 2, "222", "25.326.257", "Prof");
const persona3 = new Persona("Sanchez", "Pedro", 22, "333", "18.553.171", "Prof");
const persona4 = new Persona("Ringuelet", "Carlos", 14, "444", "19.844.122", "Admin");



const resta = (a, b) => a-b;


let Legajo= parseInt(prompt("Ingrese el legajo por el que desea realizar la consulta (legajos disponibles: 111, 222, 333, 444)"));
let diasTomados= parseInt(prompt("Ingrese días de vacaciones tomados en el año"));
while(legajo !="ESC"){

}


    
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
 

