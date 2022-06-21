"use strict";
const arreglo3 = new Array();
arreglo3.push('hola!');
function mostrarEnConsolaString(mensaje) {
    console.log('%c' + mensaje, 'background: #222; color: #bada55');
    const mensaje2 = `%c ${mensaje}, background: #222; color: #bada55`;
    return mensaje2;
}
mostrarEnConsolaString('Hola TypeScript!');
console.log(mostrarEnConsolaString('Hola TypeScript!'));
function mostrarEnConsolaGenerico(valor) {
    console.log('%c' + valor, 'background: #888; color: #bada55');
    return valor;
}
const valorDevueltoArray = mostrarEnConsolaGenerico(['a', 'b', 'c']);
const valorDevueltoNumero = mostrarEnConsolaGenerico(10);
const valorDevueltoBoolean = mostrarEnConsolaGenerico(true);
mostrarEnConsolaGenerico('blanco');
console.log('---------------uso tipos genericos en funciones--------------------');
function modificarArregloAlMismoTipo(valores, fnc) {
    const newArreglo = new Array();
    for (const valor of valores) {
        newArreglo.push(fnc(valor));
    }
    return newArreglo;
}
const arregloNumeros = modificarArregloAlMismoTipo([1, 2, 3, 4, 5], valor => valor * 3);
const arregloString = modificarArregloAlMismoTipo(['a', 'b', 'c', 'd'], valor => valor + valor);
console.log('arreglo numeros', arregloNumeros);
console.log('arreglo string', arregloString);
function modificarArregloTipoDistinto(valores, fnc) {
    const newArreglo = new Array();
    for (const valor of valores) {
        newArreglo.push(fnc(valor));
    }
    return newArreglo;
}
const arregloANumero = modificarArregloTipoDistinto(['a', 'b', 'c', 'd'], valor => valor.length);
console.log('arreglo arregloANumero', arregloANumero);
console.log('--------------------genéricos en interfaces-----------------------');
const primerValor = { id: 10, valor: true };
const segundoValor = {
    'a': 10,
    'b': 20,
    'c': 30
};
console.log('--------------------genéricos en clases-----------------------');
class Frutero {
    constructor() {
        this.listaFrutas = [];
    }
    agregarFruta(fruta) {
        this.listaFrutas.push(fruta);
    }
    tomarFruta(index) {
        return this.listaFrutas[index];
    }
}
const frutero = new Frutero();
frutero.agregarFruta('fresa');
frutero.agregarFruta('piña');
console.log('frutero', frutero);
console.log('--------------------implementación de interfaces con genéricos en clases-----------------------');
class Procesador {
    constructor() {
        this.elementos = [];
    }
    agregar(elemento) {
        this.elementos.push(elemento);
    }
    remover(index) {
        return this.elementos[index];
    }
    procesar(index) {
        return this.elementos[index].procesar();
    }
}
class PuestoBatidos extends Procesador {
}
const puestoBatidos = new PuestoBatidos();
puestoBatidos.agregar({
    elemento: 'fresa',
    procesar: () => 'batido-fresa'
});
console.log('puesto batidos', puestoBatidos);
class PeluqueriaPerros extends Procesador {
}
const bolaDeNieve = {
    nombre: 'Bola de Nieve',
    raza: 'Poodle'
};
const peluqueriaPerros = new PeluqueriaPerros();
peluqueriaPerros.agregar({
    elemento: bolaDeNieve,
    procesar: () => bolaDeNieve
});
console.log('peluqueriaPerros', peluqueriaPerros);
console.log('---------------------------restricciones---------------');
function picarFrutas(frutas) {
    for (const fruta of frutas) {
        fruta.picar();
    }
}
class Fresa {
    constructor() {
        this.tipo = 'fresa';
    }
    picar() {
        return this.tipo;
    }
}
class Mango {
    constructor() {
        this.tipo = 'mango';
    }
    picar() {
        return this.tipo;
    }
}
class prueba3 {
}
const p = new prueba3();
let fresa = new Fresa();
let mango = new Mango();
picarFrutas([fresa, mango]);
console.log('picar frutas', picarFrutas([fresa, mango]));
function obtenerPropiedadFruta(nombrePropiedad, fruta) {
    return fruta[nombrePropiedad];
}
const tipo = obtenerPropiedadFruta('tipo', fresa);
//# sourceMappingURL=genericos.js.map