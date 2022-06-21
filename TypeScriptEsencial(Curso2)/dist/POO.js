"use strict";
console.log('-----------------------------------clases----------------------------------');
class Vehiculo {
    constructor(_marca, _color, _numeroruedas = 0) {
        this._marca = _marca;
        this._color = _color;
        this._numeroruedas = _numeroruedas;
    }
    descripcionVehiculo() {
        return `el vehículo es de marca ${this._marca} y es de color ${this._color} `;
    }
    moverse() { return `El vehículo se mueve a la velocidad de ${this.obtenerVelocidad()}`; }
    obtenerVelocidad() {
        return '100 km/h';
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
    get numeroruedas() {
        return this._numeroruedas;
    }
    set numeroruedas(numeroruedas) {
        this._numeroruedas = numeroruedas;
    }
}
const miVehiculo = new Vehiculo('Nissan', 'negro', 4);
console.log(miVehiculo.descripcionVehiculo());
console.log('------------------------Herencia de clases-----------------------------------------');
class Avion extends Vehiculo {
    constructor(marca, color, largoAlas) {
        super(marca, color);
        this._largoAlas = largoAlas;
    }
    descripcionVehiculo() {
        return `el avión es de marca ${this.marca} y es de color ${this.color}`;
    }
    moverse() { return `El avión se mueve a la velocidad de ${this.obtenerVelocidad()}`; }
}
const avion = new Avion('boing', 'azul', 15);
console.log(avion.descripcionVehiculo());
console.log('------------------------Clases abstractas-----------------------------------------');
class Transporte {
    constructor(marca, color) {
        this._marca = marca;
        this._color = color;
    }
    descripcionVehiculo() {
        return `el vehículo es de marca ${this._marca} y es de color ${this._color} `;
    }
    moverse() { return `El vehículo se mueve a la velocidad de ${this.obtenerVelocidad()}`; }
    obtenerVelocidad() {
        return '100 km/h';
    }
}
class Barco extends Transporte {
    constructor(numeroTimones, marca, color) {
        super(marca, color);
        this._numeroTimones = numeroTimones;
    }
}
class Bici extends Transporte {
    constructor(numeroRuedas, marca, color) {
        super(marca, color);
        this._numeroRuedas = numeroRuedas;
    }
    moverse() { return `la bici se mueve a la velocidad de ${this.obtenerVelocidad()}`; }
}
const barco = new Barco(1, 'sjdhb', 'rojo');
const bici = new Bici(2, 'shimano', 'negro');
const moverTodos = (transportes) => {
    for (const transporte of transportes) {
        console.log(transporte.moverse());
    }
};
moverTodos([barco, bici]);
console.log('----------------------implementación interfaces--------------------------------');
class Animal {
    moverse() {
        return 'el animal camina';
    }
}
class Transporte2 {
    constructor(marca, color) {
        this._numeroMotor = Transporte2.generarIdentificador();
        this._marca = marca;
        this._color = color;
    }
    descripcionVehiculo() {
        return `el vehículo es de marca ${this._marca} y es de color ${this._color} `;
    }
    moverse() { return `El vehículo2 se mueve a la velocidad de ${this.obtenerVelocidad()}`; }
    obtenerVelocidad() {
        return '100 km/h';
    }
    static generarIdentificador() {
        return Math.random().toString(36).slice(2);
    }
}
class Vehiculo2 extends Transporte2 {
    constructor(marca, color, _numeroRuedas) {
        super(marca, color);
        this._numeroRuedas = _numeroRuedas;
    }
    agregarPiloto(nombre) {
        this._piloto = {
            id: Vehiculo2.generarIdentificador(),
            nombre
        };
    }
}
const otrovehiculo = new Vehiculo2('Nissan', 'azul', 4);
const perro = new Animal();
const moverlosTodos = (elementos) => {
    for (const elemento of elementos) {
        console.log(elemento.moverse());
    }
};
moverlosTodos([otrovehiculo, perro]);
console.log('----------------------propiedades estáticas--------------------------------');
Vehiculo2.generarIdentificador();
console.log(Vehiculo2.generarIdentificador());
console.log('----------------------Sobrecarga funciones--------------------------------');
var LiquidoVehiculo;
(function (LiquidoVehiculo) {
    LiquidoVehiculo[LiquidoVehiculo["Agua"] = 0] = "Agua";
    LiquidoVehiculo[LiquidoVehiculo["Aceite"] = 1] = "Aceite";
    LiquidoVehiculo[LiquidoVehiculo["LiquidoFrenos"] = 2] = "LiquidoFrenos";
})(LiquidoVehiculo || (LiquidoVehiculo = {}));
var PiezasExterna;
(function (PiezasExterna) {
    PiezasExterna[PiezasExterna["Llantas"] = 5] = "Llantas";
    PiezasExterna[PiezasExterna["Pintura"] = 6] = "Pintura";
})(PiezasExterna || (PiezasExterna = {}));
class Vehiculo3 {
    constructor(marca, color, numeroRuedas) {
        this._marca = marca;
        this._color = color;
        this._numeroRuedas = numeroRuedas;
    }
    hacerMantenimiento(elemento) {
        if (elemento in LiquidoVehiculo) {
            console.log('Cambiando líquido del vehiculo...');
        }
        else {
            console.log('Cambiando una pieza del vehiculo');
        }
    }
}
const vehiculo = new Vehiculo3('Nissan', 'azul', 4);
vehiculo.hacerMantenimiento(PiezasExterna.Llantas);
vehiculo.hacerMantenimiento(LiquidoVehiculo.Aceite);
//# sourceMappingURL=POO.js.map