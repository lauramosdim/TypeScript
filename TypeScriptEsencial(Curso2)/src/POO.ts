console.log('-----------------------------------clases----------------------------------')

type Color='negro'|'rojo' |'azul'| 'amarillo'

class Vehiculo{
   private _marca:string|undefined
   private _color:Color|undefined
   private _numeroruedas:number|undefined



  constructor(_marca: string, _color: Color,_numeroruedas:number=0) {
    this._marca = _marca
    this._color = _color
    this._numeroruedas=_numeroruedas
  }

   descripcionVehiculo():string{
    return `el vehículo es de marca ${this._marca} y es de color ${this._color} `
  }

// '-----------------------------------propiedades públicas y privadas----------------------------------'

//si no se agrega la keyword private son publicos
   moverse():string{return `El vehículo se mueve a la velocidad de ${this.obtenerVelocidad()}`}
  
   protected obtenerVelocidad():string {
    return '100 km/h'    
  }

  // '-----------------------------------modificadores de atributos de clase----------------------------------'

  //si la clase no tiene constructor deben soportar por defecto elm tipo undefined, porque no van a tener valor cuando la instancia se inicialice
    public get marca(): string|undefined
  {
         return this._marca
     }
 
     public set marca(marca: string|undefined
 ) {
         this._marca = marca
     }
 
     public get color(): Color|undefined
  {
         return this._color
     }
 //nosotros controlamos la manera en la que se acceda o se modifica la propiedad, podemos hacer cálculos antes de asignar valor a la variable

 //nos permite controlar la abstracción o el encapsulamiento
     public set color(color: Color|undefined
 ) {
         this._color = color
     }
 
     public get numeroruedas(): number|undefined
  {
         return this._numeroruedas
     }
 
     public set numeroruedas(numeroruedas: number|undefined
 ) {
         this._numeroruedas = numeroruedas
     }
 
}

const miVehiculo = new Vehiculo('Nissan','negro',4)
console.log(miVehiculo.descripcionVehiculo())
//no puedo acceder a miVehiculo.obtenerVelocidad

// const otroVehiculo = new Vehiculo();
//puedo acceder como si fueran una propiedad publica
// otroVehiculo.marca='Nissan'
// otroVehiculo.color='negro'
// otroVehiculo.numeroruedas=4

// console.log(otroVehiculo);

// otroVehiculo.marca='Toyota'
// console.log(otroVehiculo);

console.log('------------------------Herencia de clases-----------------------------------------')

class Avion extends Vehiculo{
    _largoAlas:number


  constructor(marca: string, color: Color,largoAlas:number) {
      super(marca,color)
    this._largoAlas = largoAlas
  }

descripcionVehiculo():string{
    return `el avión es de marca ${this.marca} y es de color ${this.color}`
}    

//me genera un error porque es un método privado y no puede ser accedido a este, ni desde clase hijas, toca ponerlo protected
moverse():string{return `El avión se mueve a la velocidad de ${this.obtenerVelocidad()}`}
  //los protected pueden ser accedidos desde cualquier clase que los implemente, pero si intento desde la intsnacia, no aparece en la lista de disponibles
}

const avion=new Avion ('boing','azul',15)
console.log(avion.descripcionVehiculo())

console.log('------------------------Clases abstractas-----------------------------------------')
//no se peuden instanciar, su prop{osito es ser heredada por otra clase

abstract class Transporte{
_marca:string
_color:Color


  constructor(marca: string, color: Color) {
    this._marca = marca
    this._color = color
  }

  descripcionVehiculo():string{
    return `el vehículo es de marca ${this._marca} y es de color ${this._color} `
  }

   moverse():string{return `El vehículo se mueve a la velocidad de ${this.obtenerVelocidad()}`}
  
   protected obtenerVelocidad():string {
    return '100 km/h' }

}
// obtengo un error al tratar de instanciar una clase abstracta
// const transporte = new Transporte()

class Barco extends Transporte{

_numeroTimones:number

  constructor(numeroTimones: number,marca: string,  color: Color) {
      super(marca,color)
    this._numeroTimones = numeroTimones
  }

//   moverse():string{return `El barco se mueve a la velocidad de ${this.obtenerVelocidad()}`}

}

class Bici extends Transporte{

    _numeroRuedas:number
    
      constructor(numeroRuedas: number,marca: string,  color: Color) {
          super(marca,color)
        this._numeroRuedas = numeroRuedas
      }

      moverse():string{return `la bici se mueve a la velocidad de ${this.obtenerVelocidad()}`}
    
    
    }

const barco = new Barco(1,'sjdhb','rojo')
const bici = new Bici(2,'shimano', 'negro')

const moverTodos=(transportes:Array<Transporte>):void=>{
    for (const transporte of transportes) {
        console.log(transporte.moverse())
        
    }

}
//barco llama el método dentro de la clase transporte porque no sobreescribí el método
moverTodos([barco,bici])

console.log('----------------------implementación interfaces--------------------------------')

interface AlgoQueSeMueve{
    nombre:string|undefined,
    //cuando definimos un método dentro de una interface debo usar arrow function
    moverse:()=>string
}

class Animal implements AlgoQueSeMueve{
    nombre: string | undefined
    moverse (): string{
        return'el animal camina'
    }
    
}

abstract class Transporte2 implements AlgoQueSeMueve {

 //definida por Algoquesemueve
    nombre: string | undefined
  
    _marca:string
    _color:Color
    //las clases estáticas se acceden con el nommbre de la clase
    _numeroMotor=Transporte2.generarIdentificador()
    
    
      constructor(marca: string, color: Color) {
        this._marca = marca
        this._color = color
      }
    
      descripcionVehiculo():string{
        return `el vehículo es de marca ${this._marca} y es de color ${this._color} `
      }
    
       moverse():string{return `El vehículo2 se mueve a la velocidad de ${this.obtenerVelocidad()}`}
      
       protected obtenerVelocidad():string {
        return '100 km/h' }
  
        // console.log('----------------------propiedades estáticas--------------------------------');
        static generarIdentificador(): string {
           return Math.random().toString(36).slice(2)
        }


  
}

interface Piloto{
    id:string,
    nombre:string
}

class Vehiculo2 extends Transporte2 {
  
    _numeroRuedas:number
    _piloto:Piloto|undefined


  constructor(marca: string, color: Color,_numeroRuedas: number) {
      super(marca,color)
    this._numeroRuedas = _numeroRuedas
  }

  agregarPiloto(nombre:string):void{
    this._piloto={
        id:Vehiculo2.generarIdentificador(),
        nombre
    }
  }

}

const otrovehiculo=new Vehiculo2('Nissan','azul',4)
const perro=new Animal()




const moverlosTodos=(elementos:Array<AlgoQueSeMueve>):void=>{
    for (const elemento of elementos) {
        console.log(elemento.moverse())
        
    }

}
//barco llama el método dentro de la clase transporte porque no sobreescribí el método
moverlosTodos([otrovehiculo,perro])


console.log('----------------------propiedades estáticas--------------------------------')
Vehiculo2.generarIdentificador()
console.log(Vehiculo2.generarIdentificador())

console.log('----------------------Sobrecarga funciones--------------------------------')

enum LiquidoVehiculo {
    Agua,
    Aceite,
    LiquidoFrenos
}

enum PiezasExterna {
    Llantas = 5,
    Pintura
}

class Vehiculo3 {
    _numeroRuedas: number
    _marca: string
    _color: Color

    constructor(marca: string, color: Color, numeroRuedas: number) {
        this._marca = marca
        this._color = color
        this._numeroRuedas = numeroRuedas
    }

    //creamos un método que tiene el mismo nombre pero recibe diferentes parámetros
    //sobrecargas
    hacerMantenimiento(elemento: LiquidoVehiculo): void
    hacerMantenimiento(elementoExterno: PiezasExterna): void

    //la función en sí, tiene el requerimiento de que debe soportar los parámetros de las condiciones anteriores
    hacerMantenimiento(elemento: LiquidoVehiculo | PiezasExterna): void {
        if (elemento in LiquidoVehiculo) {
            console.log('Cambiando líquido del vehiculo...')
        } else {
            console.log('Cambiando una pieza del vehiculo')
        }
    }
}

const vehiculo = new Vehiculo3('Nissan', 'azul', 4)
vehiculo.hacerMantenimiento(PiezasExterna.Llantas)
vehiculo.hacerMantenimiento(LiquidoVehiculo.Aceite)
