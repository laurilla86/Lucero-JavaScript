/* function calculadora(num1, num2, operacion){
    switch(operacion){
        case "+":
            return num1 + num2;
            break;/* cuando hay un return, no es necesario usar el break en switch*/
/*          
        case "-":
            return num1 - num2;
            
        case "*":
            return num1 * num2;
            
        case "/":
            return num1 /num2;
            
        default:
            return "operacion no definida";
            break;
    }
}

let num1= parseInt(prompt("Ingrese el primer número"));
let num2= parseInt(prompt("Ingrese el segundo número"));
let operacion= prompt("Ingrese la operación");

let resultado= calculadora(num1,num2,operacion);
alert(resultado);  */
 

function saludar(nombre){
    if(nombre === "laura"){
        return "hola laura";
    }else{
        return "hola desconocido";
    }
}
let nombre= prompt("Ingresa el nombre");
let saludo= saludar(nombre);
alert(saludo);
