
const arreglo3 = new Array<string>()
arreglo3.push('hola!')

function mostrarEnConsolaString(mensaje: string): string {
    console.log('%c' + mensaje, 'background: #222; color: #bada55')
    const mensaje2=`%c ${mensaje}, background: #222; color: #bada55`
    return mensaje2
}

mostrarEnConsolaString('Hola TypeScript!')
console.log(mostrarEnConsolaString('Hola TypeScript!'))


////// Con Genéricos:

function mostrarEnConsolaGenerico<T>(valor: T): T {
    console.log('%c' + valor, 'background: #888; color: #bada55')
    return valor
}

const valorDevueltoArray = mostrarEnConsolaGenerico(['a', 'b', 'c'])

const valorDevueltoNumero = mostrarEnConsolaGenerico(10)

const valorDevueltoBoolean = mostrarEnConsolaGenerico(true)

mostrarEnConsolaGenerico<'blanco'>('blanco')

console.log('---------------uso tipos genericos en funciones--------------------')


function modificarArregloAlMismoTipo<T>(valores: T[], fnc: (valor: T) => T): T[] {
    const newArreglo = new Array<T>()
    for (const valor of valores) {
        newArreglo.push(fnc(valor))
    }
    return newArreglo
}

const arregloNumeros = modificarArregloAlMismoTipo([1, 2, 3, 4, 5], valor => valor * 3)

const arregloString = modificarArregloAlMismoTipo(['a', 'b', 'c', 'd'], valor => valor + valor)

console.log('arreglo numeros',arregloNumeros)
console.log('arreglo string',arregloString)


//const arregloString2 = modificarArregloAlMismoTipo(['a', 'b', 'c', 'd'], (valor) => valor.length);

function modificarArregloTipoDistinto<T, R>(valores: T[], fnc: (valor: T) => R): R[] {
    const newArreglo = new Array<R>()
    for (const valor of valores) {
        newArreglo.push(fnc(valor))
    }
    return newArreglo
}

const arregloANumero = modificarArregloTipoDistinto<string, number>(['a', 'b', 'c', 'd'], valor => valor.length)

console.log('arreglo arregloANumero',arregloANumero)

console.log('--------------------genéricos en interfaces-----------------------')

//Describe las propiedades de un objeto:

interface IConGenerico<T, R> {
    id: T;
    valor: R;
}

const primerValor: IConGenerico<number, boolean> = { id: 10, valor: true }

// Describe el tipo de un índice:

interface ITipoIndex<T> {
    [id: string]: T;
}

//el objeto va a ser de tipo index y el genérico de tipo number
const segundoValor: ITipoIndex<number> = {
    'a': 10,
    'b': 20,
    'c': 30
}

console.log('--------------------genéricos en clases-----------------------')

type Fruta = 'fresa' | 'mango' | 'banano' | 'piña';

class Frutero<T>{

    private listaFrutas: T[] = []

    agregarFruta(fruta: T): void {
        this.listaFrutas.push(fruta)
    }

    tomarFruta(index: number): T {
        return this.listaFrutas[index]
    }
}

const frutero = new Frutero<Fruta>()

frutero.agregarFruta('fresa')
frutero.agregarFruta('piña')

console.log('frutero',frutero)

console.log('--------------------implementación de interfaces con genéricos en clases-----------------------')


//Definición de clase e interface genérica:

interface IProcesado<C, D> {
    elemento: C,
    procesar: () => D
}
//va a ser la implementación de las clases que vayan a implementar la lógica
interface IProcesador<A, B> {
    elementos: Array<IProcesado<A, B>>,
    agregar: (elemento: IProcesado<A, B>) => void,
    remover: (index: number) => IProcesado<A, B>,
    procesar: (index: number) => B
}

abstract class Procesador<T, R> implements IProcesador<T, R>{

    elementos: IProcesado<T, R>[] = []

    agregar(elemento: IProcesado<T, R>): void {
        this.elementos.push(elemento)
    }

    remover(index: number): IProcesado<T, R> {
        return this.elementos[index]
    }

    procesar(index: number): R {
        return this.elementos[index].procesar()
    }
}

// Definición de clase e interface con tipos fijos:

// Primer tipo con tipos:

type Fruta2 = 'fresa' | 'mango' | 'banano' | 'piña' | 'sandía' | 'kiwi';
type Batido = 'batido-fresa' | 'batido-mango' | 'batido-banano' | 'batido-piña' | 'batido-sandía' | 'batido-kiwi';

class PuestoBatidos extends Procesador<Fruta2, Batido>{ }

const puestoBatidos = new PuestoBatidos()
puestoBatidos.agregar({
    elemento: 'fresa',
    procesar: () => 'batido-fresa'
})

console.log('puesto batidos',puestoBatidos)


// Segundo ejemplo con una interfaz como tipo fijo:

interface Perro2 {
    nombre: string,
    raza: string
}

class PeluqueriaPerros extends Procesador<Perro2, Perro2>{ }

const bolaDeNieve = {
    nombre: 'Bola de Nieve',
    raza: 'Poodle'
}

const peluqueriaPerros = new PeluqueriaPerros()
peluqueriaPerros.agregar({
    elemento: bolaDeNieve,
    procesar: () => bolaDeNieve
})

console.log('peluqueriaPerros',peluqueriaPerros)



console.log('---------------------------restricciones---------------')

type Fruta3 = 'fresa' | 'mango' | 'banano' | 'piña' | 'sandía' | 'kiwi';

interface IFruta {
    tipo: Fruta3,
    picar: () => Fruta3
}

// Con extend se indica que F debe ser un derivado del tipo IFruta
function picarFrutas<F extends IFruta>(frutas: F[]): void {
    for (const fruta of frutas) {
        fruta.picar()
    }
}

class Fresa implements IFruta {
    tipo: Fruta3 = 'fresa'

    picar() {
        return this.tipo
    }
}

class Mango implements IFruta {
    tipo: Fruta3 = 'mango'

    picar() {
        return this.tipo
    }
}

class prueba3{}
const p = new prueba3()

let fresa = new Fresa()
let mango = new Mango()

picarFrutas([fresa, mango])

console.log('picar frutas',picarFrutas([fresa, mango]))


//////////////////////////////////////////////////////////////////

// Con keyof se indica que K debe el nombre de una propiedad de IFruta
function obtenerPropiedadFruta<K extends keyof IFruta>(nombrePropiedad: K, fruta: IFruta): Fruta3 | (() => Fruta3) {
    return fruta[nombrePropiedad]
}

const tipo = obtenerPropiedadFruta('tipo', fresa)
