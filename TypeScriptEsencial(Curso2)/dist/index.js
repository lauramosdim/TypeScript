"use strict";
console.log('//---anotación literal---//');
let mensaje;
mensaje = 'Hola';
let mensaje2 = 'Hola';
const prueba = 230;
const prueba2 = 10;
let laura = 'pechoca';
const arregloString1 = ['a', 'b', 'c'];
const arregloString2 = ['a', 'b', 'c'];
function calculo(x, y) {
    return x * y;
}
const animales = ['pato', 'vaca', 'conejo', 'jirafa', 'gato'];
const filtro = (valor) => { return valor.length >= 5; };
const animalesFiltrados = animales.filter(filtro);
console.log('animales filtrados', animalesFiltrados);
console.log('// ------------------Tipos any y unkownn--------------------------------//');
let cualquierValor = 'un valor string';
cualquierValor = 10;
cualquierValor = true;
cualquierValor = {};
let variableString = cualquierValor;
let variableUnknown = 10;
let otraVariableUnknown = variableUnknown;
console.log('//---------uso de null y undefined---------------//');
let unaVariable = undefined;
let variableNula = null;
const lanzarError = (mensajeError) => {
    throw new Error(mensajeError);
};
const saludar = (mensaje) => {
    console.log(mensaje);
};
let saludo = saludar('hola');
console.log('saludar', saludo);
console.log('////----------unión de tipos--------------------///');
let fechaNacimiento;
let pruebasTresTipos;
pruebasTresTipos = 'soy un string';
pruebasTresTipos = 123;
const calcularPromedio = (valores, total) => {
    if (typeof valores === 'number' && total) {
        return valores / total;
    }
    if (Array.isArray(valores) && valores.length > 0) {
        return valores.reduce((acumulador, valorActual) => acumulador + valorActual, 0) / valores.length;
    }
    throw new Error('parámetros no son válidos');
};
calcularPromedio([10, 34, 56, 78]);
calcularPromedio([156, 21]);
calcularPromedio(0, 3);
console.log('//------------------asignando alias a tipos--------------------//');
let mascota = 'perro';
const nombres = ['Layka', 'smooky', 'bobby', 'toto', 'tata'];
let valor = 10;
console.log('//------------------interfaces----------------------///');
const datosHuesped = {
    idHuesped: '01',
    nombre: 'Dennis',
    apellido: 'Lizano',
    correo: 'dennis@com.co',
    direccion: 'calle 3,avenida8',
    telefono: '888523',
};
const reservacion = {
    idreservacion: 'r01',
    huesped: datosHuesped,
    fechaEntrada: new Date('2021/10/02'),
    fechaSalida: new Date('2021/10/05'),
    cuarto: {
        id: 10,
        tipo: 'individual',
        piso: 'primer piso',
        precioNoche: 80
    },
    nochesReservadas: 5
};
console.log('//-------------extendiendo una interfaz----------------------//');
const instanciaBB = {
    d: ['a', 'b'],
    a: 'a',
    b: 0,
    c: true
};
const instanciaDD = {
    y: undefined,
    a: 'a',
    b: 0,
    c: true,
    x: 20
};
console.log('//-----------------enum-------------------//');
var Nivel;
(function (Nivel) {
    Nivel[Nivel["Primero"] = 1] = "Primero";
    Nivel[Nivel["Segundo"] = 2] = "Segundo";
    Nivel[Nivel["Tercero"] = 3] = "Tercero";
})(Nivel || (Nivel = {}));
var TipoCuarto;
(function (TipoCuarto) {
    TipoCuarto["Individula"] = "individual";
    TipoCuarto["Doble"] = "doble";
    TipoCuarto["Triple"] = "triple";
})(TipoCuarto || (TipoCuarto = {}));
let nivel = Nivel.Primero;
const cuartoConEnum = {
    id: 10,
    tipo: TipoCuarto.Individula,
    nivel: Nivel.Segundo,
    precioNoche: 80
};
console.log('//---------------------tuplas------------------------------//');
const arreglo = ['a', 'b', 'c'];
const arregloTipoUnion = ['a', 1, 'b', 2];
const tupla = ['a', 10, true, 20];
const promesa1 = Promise.resolve(true);
const promesa2 = Promise.resolve({ a: 'valor de a', b: 20 });
Promise.all([promesa1, promesa2])
    .then(([valorRetornoPromesa1, valorRetornoPromesa2]) => console.log('promesas', valorRetornoPromesa1, valorRetornoPromesa2));
console.log('//------------------Tipos literales----------//');
const saborHelado = 'vainilla';
let sabores = 'fresa';
let siempreTrue = true;
const crearHelado = (sabor) => {
    switch (sabor) {
        case 'chocolate':
            console.log('Haciendo helado chocolate');
            break;
        case 'vainilla':
            console.log('Haciendo helado vainilla');
            break;
        case 'fresa':
            console.log('Haciendo helado fresa');
            break;
        default:
            console.log('Haciendo helado chocolate');
            break;
    }
};
console.log('//---------------operador keyof---------------------//');
const huesped = {
    idHuesped: '01',
    nombre: 'Karol',
    apellido: 'Salazar',
    correo: 'l@j.com',
    direccion: 'calle 5',
    telefono: '12345'
};
const nombrePropiedad = 'nombre';
const retornarValor = (huesped, key) => {
    return huesped[key];
};
console.log('keyof', retornarValor(huesped, 'correo'));
//# sourceMappingURL=index.js.map