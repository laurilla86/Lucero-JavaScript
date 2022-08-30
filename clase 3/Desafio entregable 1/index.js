let credito=1000;

let precio=parseInt(prompt("Ingrese el precio"));

let saldo = credito-precio;

while(saldo>0){
    let mensaje=`Puede seguir comprando. Saldo a favor ${saldo}`;
    alert(mensaje)
    precio=parseInt(prompt("Ingrese el precio"));
    saldo=saldo-precio;
}

alert("No tiene más saldo") 

