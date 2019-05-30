"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNone = function (x) { return (x === null || x === undefined); };
function get(x) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var r = args.reduce(function (a, k) { return (a !== null && a !== undefined) ? a[k] : undefined; }, x);
    return (r === null) ? undefined : r;
}
exports.default = get;
