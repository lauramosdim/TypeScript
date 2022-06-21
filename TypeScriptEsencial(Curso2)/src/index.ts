console.log('//---anotación literal---//');

let mensaje:string
mensaje='Hola'

let mensaje2='Hola'//saca como tipo de dato string, esto se llama inferencia de tipos


const prueba:number=230
const prueba2=10 //cuando es constante no infiere el tipo sino el valor.

let laura='pechoca'
// laura=100

const arregloString1:string[]=['a','b','c']

const arregloString2:Array<string>=['a','b','c']

interface Persona{
    nombre:string
}

// const arregloPersonas:Array<Persona>=[{nombre:'Pablo'},{nombre:'Laura'}]

function calculo(x:number,y:number):number{
    return x*y
}

const animales:string[]=['pato','vaca','conejo','jirafa','gato']

// const animalesFiltrados=animales.filter((animal)=>animal.length>=5)

const filtro =(valor:string):boolean=>{return valor.length>=5}

const animalesFiltrados=animales.filter(filtro)

console.log('animales filtrados',animalesFiltrados)


console.log('// ------------------Tipos any y unkownn--------------------------------//');

let cualquierValor:any='un valor string'
cualquierValor=10
cualquierValor=true
cualquierValor={}

let variableString:string=cualquierValor

let variableUnknown:unknown=10
//variableString=variableUnknown
let otraVariableUnknown:unknown=variableUnknown
//unknown se usa cuando voy a recivir un parámetro pero no sé de qué tipo es, pero luego voy a usar una función que me dé el tipo de dato

console.log('//---------uso de null y undefined---------------//');


let unaVariable:undefined=undefined
let variableNula:null=null

interface Persona{
    nombre:string,
    apellido:undefined
}

//const eleanor:Persona={nombre:'eleanor'}

// const decirNombre=(persona:Persona):number=>{
//     //return persona.apellido.length
// }

//decirNombre(eleanor)

//----------never y void--------------------//
const lanzarError=(mensajeError:string):never=>{
    throw new Error(mensajeError)
    
}
//cuando lanzamos un error en js la ejecución del programa se detiene, nunca sucede el retorno, se entiende que lo que se quiere es lanzar un error y detener la ejecución

const saludar=(mensaje:string):void=>{
    console.log(mensaje)
    
}

let saludo=saludar('hola')
console.log('saludar',saludo);

//let error=lanzarError('un error ha ocurrido')//esta variable no se creará


console.log('////----------unión de tipos--------------------///');

let fechaNacimiento:string|Date

let pruebasTresTipos:string|number|boolean
pruebasTresTipos='soy un string'
pruebasTresTipos=123

//pruebasTresTipos=Array<string>

const calcularPromedio=(valores:number|number[],total?:number):number|never=>{
if (typeof valores==='number'&&total) {
    return valores/total
}if (Array.isArray(valores)&&valores.length>0) {
    return valores.reduce((acumulador,valorActual)=>acumulador+valorActual,0)/valores.length
    
} throw new Error('parámetros no son válidos')

}

calcularPromedio([10,34,56,78])
calcularPromedio([156,21])
calcularPromedio(0,3)
//calcularPromedio([])

console.log('//------------------asignando alias a tipos--------------------//');


type Perro='perro'
type Gato='gato '
type PezBeta='pez beta'
type Hamster='hamster'

type Mascota=Perro|Gato|Hamster|PezBeta
let mascota:Mascota='perro'
// mascota='pajaro'

type ListaNombreAnimales=Array<string>
const nombres:ListaNombreAnimales=['Layka','smooky','bobby','toto','tata']

type UnionStringNumber=string|number
let valor:UnionStringNumber=10

console.log('//------------------interfaces----------------------///');



// para tipar objetos

interface Huesped{
    idHuesped:string,
    nombre:string,
    apellido:string,
    correo:string,
    direccion?:string,
    telefono?:string,
}

type Piso='primer piso'|'segundo piso'

interface Cuarto{
    id:number,
    tipo:'individual'|'doble'|'triple',
    piso:Piso,
    precioNoche:number

}

interface Reservacion{
    idreservacion:string,
    huesped:Huesped,
    fechaEntrada:Date,
    fechaSalida:Date,
    cuarto:Cuarto,
    nochesReservadas?:number
}

const datosHuesped:Huesped={
    idHuesped:'01',
    nombre:'Dennis',
    apellido:'Lizano',
    correo:'dennis@com.co',
    direccion:'calle 3,avenida8',
    telefono:'888523',
}

const reservacion:Reservacion={
    idreservacion: 'r01',
    huesped: datosHuesped,
    fechaEntrada: new Date('2021/10/02'),
    fechaSalida:new Date('2021/10/05'),
    cuarto:{
        id:10,
        tipo:'individual',
        piso:'primer piso',
        precioNoche:80} ,
    nochesReservadas:5
}

console.log('//-------------extendiendo una interfaz----------------------//');



interface AA{
    a:string,
    b:number,
    c:boolean
}

interface BB extends AA{
  d:Array<string>
}

interface CC{
    x:string|number
}

interface DD extends AA,CC{
    y:number|undefined
}

const instanciaBB:BB={
    d: ['a','b'],
    a: 'a',
    b: 0,
    c: true
}

const instanciaDD:DD={
    y: undefined,
    a: 'a',
    b: 0,
    c: true,
    x: 20
}

console.log('//-----------------enum-------------------//');



// nos permiten definir una lista de contsnates que pertenecen a una misma categoría

//Tipo numérico
// el primer elemento siempre va a tener un valor de inicio, si no pongo nada automaticamente el primer elemento va atomar elemento cero
enum Nivel{
    Primero=1,
    Segundo,
    Tercero

}

//Tipo string
enum TipoCuarto{
    Individula='individual',
    Doble='doble',
    Triple='triple'
}

let nivel:Nivel=Nivel.Primero

interface CuartoConEnum{
    id:number,
    tipo:TipoCuarto,
    nivel:Nivel, 
    precioNoche:number   
}

const cuartoConEnum:CuartoConEnum={
    id: 10,
    tipo: TipoCuarto.Individula,
    nivel: Nivel.Segundo,
    precioNoche: 80
}

console.log('//---------------------tuplas------------------------------//');


const arreglo:string[]=['a','b','c']
const arregloTipoUnion:(string|number)[]=['a',1,'b',2]

//son muy utilizadas a la hora de recibir parámetros en una función
const tupla:[string,number,boolean,number]=['a',10,true,20]

interface PruebaInterface{
    a:string,
    b:number
}

const promesa1=Promise.resolve<boolean>(true)
const promesa2=Promise.resolve<PruebaInterface>({a:'valor de a',b:20})

Promise.all([promesa1,promesa2])
.then(([valorRetornoPromesa1,valorRetornoPromesa2]:[boolean,PruebaInterface])=>console.log('promesas',valorRetornoPromesa1,valorRetornoPromesa2)
)

console.log('//------------------Tipos literales----------//');

//cuando definimos una constante, typescript por defecto agrega un literal a la constante, es decir toma como tipo el valor
const saborHelado='vainilla'
type SaborHelado='chocolate'|'vainilla'|'fresa'

let sabores:SaborHelado='fresa'
let siempreTrue:true=true
//sirven para acortar el numero de valores que potanciolmente puede tener una variable
const crearHelado=(sabor:SaborHelado|string):void=>{
    switch (sabor) {
        case 'chocolate':
            console.log('Haciendo helado chocolate')
            break
        case 'vainilla':
            console.log('Haciendo helado vainilla')
            break
        case 'fresa':
            console.log('Haciendo helado fresa')
            break
        default:
            console.log('Haciendo helado chocolate')
            break
    }
}

console.log('//---------------operador keyof---------------------//');


interface Huesped{
    idHuesped:string,
    nombre:string,
    apellido:string,
    correo:string,
    direccion?:string,
    telefono?:string,
 }

 const huesped:Huesped={
     idHuesped: '01',
     nombre: 'Karol',
     apellido: 'Salazar',
     correo: 'l@j.com',
     direccion:'calle 5',
     telefono:'12345'
 }
 //permite utilizar la lista de propiedad de un objeto como un tipo
//tomo la lista de nombres de la interfaz como un tipo y luego en el vr de la constante paso un nombre de alguna de las propiedades de la interfaz
 const nombrePropiedad:keyof Huesped='nombre'

 const retornarValor=(huesped:Huesped,key:keyof Huesped)=>{
    return huesped[key]
 }

 console.log('keyof', retornarValor(huesped,'correo'))
 