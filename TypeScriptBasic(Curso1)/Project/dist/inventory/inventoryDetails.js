"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inventoryDetails_computer_js_1 = __importDefault(require("./inventoryDetails.computer.js"));
var inventoryDetails_furniture_js_1 = __importDefault(require("./inventoryDetails.furniture.js"));
exports.default = Vue.extend({
    props: ["item"],
    render: function (createDetails) {
        var details = null;
        switch (this.item.inventoryType) {
            case "computer":
                details = inventoryDetails_computer_js_1.default;
                break;
            case "furniture":
                details = inventoryDetails_furniture_js_1.default;
                break;
        }
        return createDetails(details, { props: this.$props });
    }
});
