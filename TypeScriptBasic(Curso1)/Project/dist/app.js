"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inventoryStore_js_1 = __importDefault(require("./inventoryStore.js"));
var MainContent = function () { return ({
    delay: 200,
    loading: { template: "<loading />" },
    component: inventoryStore_js_1.default.isInitialized.then(function () { return ({
        components: { router: router },
        template: "\n      <div id=\"main-content\">\n        <router>\n          <template #loading>\n            <p>Loading...</p>\n          </template>\n\n          <template #notFound>\n            <h1>Page Not Found</h1>\n          </template>\n        </router>\n      </div>\n    "
    }); })
}); };
var router = Vue.extend({
    data: function () { return ({
        currentRoute: null,
        ViewComponent: null
    }); },
    methods: {
        syncRoute: function () {
            this.currentRoute = window.location.hash.replace(/^#\//, "");
        }
    },
    watch: {
        currentRoute: function () {
            var _this = this;
            this.ViewComponent = { template: "<loading />" };
            var page = this.currentRoute || "inventory";
            Promise.resolve().then(function () { return __importStar(require("./".concat(page, "/").concat(page, ".js"))); }).then(function (x) { return (_this.ViewComponent = x.default); })
                .catch(function (err) {
                console.warn(err);
                _this.ViewComponent = "notFound";
            });
        }
    },
    created: function () {
        window.addEventListener("hashchange", this.syncRoute);
        this.syncRoute();
    },
    render: function (h) {
        var vc = this.ViewComponent;
        if (vc == null) {
            return null;
        }
        return typeof vc === "string" ? this.$slots[vc] : h(this.ViewComponent);
    }
});
Vue.component("loading", {
    template: "\n    <div class=\"loading\">\n      <strong>Loading...</strong>\n      <div class=\"progress\">\n        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n    </div>\n  "
});
// initialize the app
new Vue({
    el: "#app",
    components: { MainContent: MainContent },
    template: "\n    <div class=\"container-fluid\">\n        <div class=\"header clearfix\">\n            <h3 class=\"text-muted\">Inventory Management System</h3>\n        </div>\n        <main-content />\n    </div>"
});
