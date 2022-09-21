function simulador() {
alert("Bienvenido a mi tienda");
let nombre = prompt("Ingrese nombre y apellido");
let saludo = `Hola ${nombre} a continuación te vamos a mostrar los productos en oferta`;
alert(saludo);

const ProductosEnOferta = [
    { producto: "remera básica", color: "rojo", talle: "S", precio: 6200},
    { producto: "remera básica", color: "amarillo", talle: "M", precio: 6200},
    { producto: "remera básica", color: "rosa", talle: "L", precio: 6200},
    { producto: "remera básica", color: "azul", talle: "M", precio: 6200},
    { producto: "remera básica", color: "verde", talle: "L", precio: 6200},
    { producto: "pantalón", color: "blanco", talle: "S", precio: 8000},
    { producto: "pantalón", color: "negro", talle: "L", precio: 8000},
]

ProductosEnOferta.forEach(item => alert(item.producto +" " +item.color));
let talleIngresado = prompt("Indicanos tu talle para verificar si tenemos stock. S-M-L");
let resultadoTalle = ProductosEnOferta.filter(item => item.talle === talleIngresado);
resultadoTalle.forEach(item => {
    let mensaje = `
    ${item.producto} ${item.color} $${item.precio}`;
    alert(mensaje);
})
}
simulador();
