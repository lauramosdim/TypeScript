let displayName:string="Laura's standing desk"
let inventoryType:string="furniture"
let trackingNumber:string="FD1255"
let createDate:Date=new Date()
// let originalCost:number|string
// =425
type Cost=number|string

let originalCost:Cost

// let cost:number=originalCost

if (typeof originalCost==="number") {    
    let cost:number=originalCost
}else{
    let x=originalCost
}

// let getInventoryItem=(trackingNumber:string):object=>{
//     return null

// }

// let getInventoryItem=(trackingNumber:string):{
//     displayName:string
//     inventoryType:string
//     trackingNumber:string
//     createDate:Date
//     originalCost:number
// }=>{
//     return null

// }

enum InventoryItemType{
    Computer="computer",
    Furniture="furniture"
}

interface InventoryItem{
    displayName:string
    // inventoryType:InventoryItemType
    inventoryType:"computer"|"furniture"
    readonly trackingNumber:string
    createDate:Date
    originalCost?:number

    addNote?:(note:string)=>string

}



let getInventoryItem=(trackingNumber:string):InventoryItem=>{
    return null

}

let saveInventoryItem=(item:InventoryItem)=>{
    // item.trackingNumber="1255"

}

let inventoryItem=getInventoryItem(trackingNumber)
inventoryItem.createDate=new Date()

// saveInventoryItem(inventoryItem)

saveInventoryItem({
    displayName:"Macbook",
    inventoryType:"computer",
    trackingNumber:"FD1255ddd",
    createDate:new Date(),
})

let clone=<T>(source:T):T=>{
    const serialized=JSON.stringify(source)
    return JSON.parse(serialized)
}

// const cloned=clone(inventoryItem)
const cloned=clone<InventoryItem>(inventoryItem)

declare var Vue:any