"use strict";
const test = {
    a: 'prueba'
};
const existeD = (valor) => {
    var _a, _b;
    return ((_b = (_a = valor.b) === null || _a === void 0 ? void 0 : _a.c) === null || _b === void 0 ? void 0 : _b.d) ? true : false;
};
const largoD = (valor) => {
    return valor.b.c.d.length;
};
const largoDAsertado = (valor) => {
    if (valor.b && valor.b.c) {
        return valor.b.c.d.length;
    }
    return null;
};
console.log('------------aserción de tipos------------------------------');
function calcularCostoReservacion(costoNoche, totalNoches, formato) {
    const costo = costoNoche * totalNoches;
    return formato ? `${costo}` : costo;
}
const costo = calcularCostoReservacion(90, 5, true);
console.log('costo', costo);
const pedidoSupermercado = {
    id: 1,
    cliente: 'Paula',
    productos: ['tomates', 'pan'],
    fechaEntrega: new Date('2021-10-05'),
    supermercado: 'Tesco'
};
const pedido = pedidoSupermercado;
function procesarPedido(pedido) { }
procesarPedido(pedido);
console.log('pedido', pedido);
console.log('-------------------------funciones de asercion--------------------------------');
const objeto = {
    a: 'prueba'
};
function assert(condicion, mensaje) {
    if (!condicion)
        throw new Error(mensaje);
}
function assertString(condicion, mensaje) {
    if (typeof condicion !== 'string')
        throw new Error(mensaje);
}
assertString(objeto.a, 'A no es string');
console.log(assertString(objeto.a, 'A no es string'));
;
console.log('--------------tipos de guardia---------------------');
function calcularDiasDiferencia(fechaEntrada, fechaSalida) {
    const fechaInicio = typeof fechaEntrada === 'string' ? new Date(fechaEntrada) : fechaEntrada;
    const fechaFin = typeof fechaSalida === 'string' ? new Date(fechaSalida) : fechaSalida;
    const diferenciaTiempo = fechaFin.getTime() - fechaInicio.getTime();
    return diferenciaTiempo / (1000 * 3600 * 24);
}
const dif = calcularDiasDiferencia('2005-03-21', '2005-03-23');
console.log('calcular fecha diferencia', dif);
class Fruta11 {
    constructor(fechaExpiracion, tipoFruta) {
        this._fechaExpiracion = fechaExpiracion;
        this._tipoFruta = tipoFruta;
    }
    get tipoFruta() {
        return this._tipoFruta;
    }
    get fechaExpiracion() {
        return this._fechaExpiracion;
    }
}
class Embutido {
    constructor(fechaExpiracion, marca) {
        this._fechaExpiracion = fechaExpiracion;
        this._marca = marca;
    }
    get marca() {
        return this._marca;
    }
    get fechaExpiracion() {
        return this._fechaExpiracion;
    }
}
const mango11 = new Fruta11(new Date('2021-02-10'), 'mango');
const jamon = new Embutido(new Date('2021-02-10'), 'Salazar');
function esFruta(producto) {
    return producto instanceof Fruta11;
}
function agregarCarrito(productosFrescos) {
    const embutidos = new Array();
    const frutas = new Array();
    for (let i = 0; i < productosFrescos.length; i++) {
        if (productosFrescos[i] instanceof Embutido) {
            embutidos.push(productosFrescos[i]);
        }
        if (esFruta(productosFrescos[i])) {
            frutas.push(productosFrescos[i]);
        }
    }
}
agregarCarrito([mango11, jamon]);
console.log('agregar carrito', agregarCarrito([mango11, jamon]));
;
function imprimirMarca(productosFrescos) {
    for (let i = 0; i < productosFrescos.length; i++) {
        if ('marca' in productosFrescos[i]) {
            console.log(`Producto marca ${productosFrescos[i].marca}`);
        }
    }
}
imprimirMarca([mango11, jamon]);
console.log('imprimir marca', imprimirMarca([mango11, jamon]));
console.log('----------------------------tipos partial y required ---------------');
;
function generarComputadora(computadora) {
    return Object.assign({ id: '01', fabricante: 'Apple', modelo: 'MacBook Pro 13', procesador: 'Apple M1 chip', memoriaRamGb: 8, discoDuroGb: 256 }, computadora);
}
const nuevaComputadora = generarComputadora({
    discoDuroGb: 512,
    memoriaRamGb: 16
});
const conTouchBar = generarComputadora({
    touchBar: true
});
const conTouchBarBien = Object.assign(Object.assign({}, generarComputadora({})), { touchBar: true });
console.log('----------------------readonly+----------------');
const computadora = {
    id: '01',
    fabricante: 'Apple',
    modelo: 'MacBook Pro 13',
    procesador: 'Apple M1 chip',
    memoriaRamGb: 8,
    discoDuroGb: 256
};
computadora.id = '02';
console.log('----------------------Pick y omit----------------');
const computadora2 = {
    id: '01',
    procesador: 'Intel',
    memoriaRamGb: 8,
    discoDuroGb: 256
};
const computadoraSinFabricante = {
    id: '01',
    procesador: 'Intel',
    memoriaRamGb: 8,
    discoDuroGb: 256,
    modelo: '2021',
};
//# sourceMappingURL=utilerias.js.map