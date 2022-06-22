interface DDD{
    d:string
}
interface BBB{
    c?:DDD
}
interface AAA{
    a:string;
    b?:BBB;
}

const test:AAA={
    a:'prueba'
}

//Incluyo operador para verificar las propiedades opcionales, sino lo incluyo el compilador me tira un error diciendo que las porpiedades son potencialmente  undefined
const existeD=(valor:AAA):boolean=>{
    return valor.b?.c?.d ?true:false
}

// operador de exclamación, operador de no null, b y c siempre van a existir, ignora cualquier advertencia, estamos callando al compilador, pero igual va a haber un error
const largoD=(valor:AAA):number=>{
    return valor.b!.c!.d. length
}

const largoDAsertado=(valor:AAA):number|null=>{
    if ( valor.b && valor.b.c ) {
        return valor.b!.c!.d. length
    }
    return null
}

console.log('------------aserción de tipos------------------------------');



function calcularCostoReservacion(costoNoche: number, totalNoches: number, formato: boolean): number | string {
    const costo = costoNoche * totalNoches;
    return formato ? `${costo}` : costo;
}

//Aserción usando keyword 'as' digo el tipo de parámeto, como pasé tru me va a devolver un string, no un número, ese es el riego de hacer una aserción
const costo = calcularCostoReservacion(90, 5, true) as number;

console.log('costo',costo);



interface Pedido {
    id: number;
    cliente: string;
    productos: string[];
    fechaEntrega: Date;
}

interface PedidoSupermercado extends Pedido {
    supermercado: string;
}

const pedidoSupermercado: PedidoSupermercado = {
    id: 1,
    cliente: 'Paula',
    productos: ['tomates', 'pan'],
    fechaEntrega: new Date('2021-10-05'),
    supermercado: 'Tesco'
}

const pedido = pedidoSupermercado as Pedido;
function procesarPedido(pedido: Pedido){}
procesarPedido(pedido);

console.log('pedido',pedido);

console.log('-------------------------funciones de asercion--------------------------------');


interface BBBB {
    c?: number
}

interface AAAA {
    a: string;
    b?: BB;
}

const objeto: AAAA = {
    a: 'prueba'
}

//Se recibe la condicón y un mensaje, en el retorno incluyo assert, esto va a validar que la condición se cumpla
function assert(condicion: unknown, mensaje: string): asserts condicion {
  if (!condicion) throw new Error(mensaje);
}

//esto es útil cuando tenemos que validar una propiedad que es escencial para el buen funcionamiento de la app

// // assert(objeto.b, 'B no existe');
// console.log('assert',assert(objeto.b, 'B no existe'););

// // const c = objeto.b.c;
// console.log('c',c);


function assertString(condicion: unknown, mensaje: string): asserts condicion{
    if(typeof condicion !== 'string') throw new Error(mensaje);
}

assertString(objeto.a, 'A no es string');
console.log(assertString(objeto.a, 'A no es string'););

console.log('--------------tipos de guardia---------------------');

//////////// Guardia typeof:

function calcularDiasDiferencia(fechaEntrada: Date | string, fechaSalida: Date | string): number {

    //conversión de fechas en caso que sean strings:
    const fechaInicio = typeof fechaEntrada === 'string' ? new Date(fechaEntrada) : fechaEntrada;
    const fechaFin = typeof fechaSalida === 'string' ? new Date(fechaSalida) : fechaSalida;

    const diferenciaTiempo = fechaFin.getTime() - fechaInicio.getTime();

    return diferenciaTiempo / (1000 * 3600 * 24);
}

const dif=calcularDiasDiferencia('2005-03-21','2005-03-23')
console.log('calcular fecha diferencia',dif);


////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface ProductoFresco {
    fechaExpiracion: Date;
}

class Fruta11 implements ProductoFresco {

    private _tipoFruta: string;
    private _fechaExpiracion: Date;

    get tipoFruta(): string {
        return this._tipoFruta;
    }

    get fechaExpiracion(): Date {
        return this._fechaExpiracion;
    }

    constructor(fechaExpiracion: Date, tipoFruta: string) {
        this._fechaExpiracion = fechaExpiracion;
        this._tipoFruta = tipoFruta;
    }
}

class Embutido implements ProductoFresco {

    private _marca: string;
    private _fechaExpiracion: Date;

    get marca(): string {
        return this._marca;
    }

    get fechaExpiracion(): Date {
        return this._fechaExpiracion;
    }

    constructor(fechaExpiracion: Date, marca: string) {
        this._fechaExpiracion = fechaExpiracion;
        this._marca = marca;
    }
}

const mango11 = new Fruta11(new Date('2021-02-10'), 'mango');
const jamon = new Embutido(new Date('2021-02-10'), 'Salazar');

// Guardias personalizadas: arg is Tipo:
function esFruta(producto: any): producto is Fruta {
    return producto instanceof Fruta11;
}

function agregarCarrito(productosFrescos: ProductoFresco[]): void {

    const embutidos = new Array<Embutido>();
    const frutas = new Array<Fruta11>();

    for (let i = 0; i < productosFrescos.length; i++) {

        // Guardia instanceof:
        if (productosFrescos[i] instanceof Embutido) {
            embutidos.push(productosFrescos[i] as Embutido);
        }

        // Guardia personalizadas: arg is Tipo:
        if (esFruta(productosFrescos[i])) {
            frutas.push(productosFrescos[i] as Fruta11);
        }
    }
}

agregarCarrito([mango11, jamon]);

console.log('agregar carrito',agregarCarrito([mango11, jamon]););


function imprimirMarca(productosFrescos: ProductoFresco[]): void {
    for (let i = 0; i < productosFrescos.length; i++) {

        //Guardia in:
        if ('marca' in productosFrescos[i]) {
            console.log(`Producto marca ${(productosFrescos[i] as Embutido).marca}`);
        }
    }
}

imprimirMarca([mango11, jamon]);
console.log('imprimir marca',imprimirMarca([mango11, jamon]))

console.log('----------------------------tipos partial y required ---------------');
;


interface Computadora {
    id: string;
    fabricante: string;
    modelo: string,
    procesador: string;
    memoriaRamGb: number;
    discoDuroGb: number;
    touchBar?: boolean;
}

// Partial:
function generarComputadora(computadora: Partial<Computadora>): Computadora {
    return {
        id: '01',
        fabricante: 'Apple',
        modelo: 'MacBook Pro 13',
        procesador: 'Apple M1 chip',
        memoriaRamGb: 8,
        discoDuroGb: 256,
        ...computadora
    };
}

const nuevaComputadora = generarComputadora({
    discoDuroGb: 512,
    memoriaRamGb: 16
});

// Required:

const conTouchBar: Required<Computadora> = generarComputadora({
   touchBar: true
});


const conTouchBarBien: Required<Computadora> = {
    ...generarComputadora({}),
    touchBar: true
};

console.log('----------------------readonly+----------------');



interface Computadora {
    id: string;
    fabricante: string;
    modelo: string,
    procesador: string;
    memoriaRamGb: number;
    discoDuroGb: number;
    touchBar?: boolean;
}

// Readonly:

const computadora: Readonly<Computadora> = {
    id: '01',
    fabricante: 'Apple',
    modelo: 'MacBook Pro 13',
    procesador: 'Apple M1 chip',
    memoriaRamGb: 8,
    discoDuroGb: 256
};
//no puedo modificar la propiedad de un objeto, se utiliza m{as como interface}
 computadora.id = '02';
 
 console.log('----------------------Pick y omit----------------');

// Pick:
type SubComputadora = Pick<Computadora, 'id' | 'procesador' | 'memoriaRamGb' | 'discoDuroGb'>

const computadora2: SubComputadora = {
    id: '01',
    procesador: 'Intel',
    memoriaRamGb: 8,
    discoDuroGb: 256
};

// Omit:

type SinFabricante = Omit<Computadora, 'fabricante'>;

const computadoraSinFabricante: SinFabricante = {
    id: '01',
    procesador: 'Intel',
    memoriaRamGb: 8,
    discoDuroGb: 256,
    modelo: '2021',
};
