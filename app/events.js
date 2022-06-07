"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uiohook_napi_1 = require("uiohook-napi");
var NativeEvents = /** @class */ (function () {
    function NativeEvents() {
    }
    NativeEvents.prototype.inputEvents = function () {
        uiohook_napi_1.uIOhook.on('input', function (e) {
            console.log('input done');
        });
    };
    NativeEvents.prototype.start = function () {
        uiohook_napi_1.uIOhook.start();
    };
    return NativeEvents;
}());
exports.default = NativeEvents;
//# sourceMappingURL=events.js.map