let precioUnitario = 25;
let cantidad = 60;
let descuento = 0;

if (cantidad < 10) {
    descuento = 0;
} else if (cantidad >= 10 && cantidad < 50) {
    descuento = 0.10;
} else if (cantidad >= 50) {
    descuento = 0.20;
}

let precioFinal = precioUnitario * cantidad * (1 - descuento);
console.log(precioFinal.toFixed(2));
