var displayName = "Laura's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD1255";
var createDate = new Date();
var originalCost;
// let cost:number=originalCost
if (typeof originalCost === "number") {
    var cost = originalCost;
}
else {
    var x = originalCost;
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
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Computer"] = "computer";
    InventoryItemType["Furniture"] = "furniture";
})(InventoryItemType || (InventoryItemType = {}));
var getInventoryItem = function (trackingNumber) {
    return null;
};
var saveInventoryItem = function (item) {
    // item.trackingNumber="1255"
};
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
// saveInventoryItem(inventoryItem)
saveInventoryItem({
    displayName: "Macbook",
    inventoryType: "computer",
    trackingNumber: "FD1255ddd",
    createDate: new Date(),
});
var clone = function (source) {
    var serialized = JSON.stringify(source);
    return JSON.parse(serialized);
};
// const cloned=clone(inventoryItem)
var cloned = clone(inventoryItem);
