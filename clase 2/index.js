/* let mes = prompt("ingrese mes")
if(mes==="enero" || mes==="febrero" || mes==="marzo"){
    alert("Estamos en verano");
}else if(mes==="abril" || mes==="mayo" || mes==="junio"){
    alert("Estamos en otoño");
}else if(mes==="julio"|| mes==="agosto" || mes==="septiembre"){
    alert ("Estamos en invierno");
}else{
    alert("Estamos en primavera");
}
 */

let nombreIngresado=prompt("Ingresar nombre");
let apellidoIngresado =prompt("Ingrese apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado + "\nApellido: "+apellidoIngresado);
}else{
    alert("Error: Ingresar nombre y apellido");
}


