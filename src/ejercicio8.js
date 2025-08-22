let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;
let precioFinal;

if (edad < 18) {
    precioFinal = tarifaBase * 0.8;
} else if (edad >= 65) {
    precioFinal = tarifaBase * 0.6;
} else {
    precioFinal = tarifaBase;
}

console.log(precioFinal.toFixed(2));
