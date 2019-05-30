"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("./index"));
var chai_1 = require("chai");
require("mocha");
var x = {
    p: "P",
    u: null,
    u0: {
        b: 6
    },
    uu: [
        {
            b: 3
        },
        {
            a: "A",
            b: 4
        }
    ]
};
describe("typed get", function () {
    it("should return nonnullable property as-is", function () {
        var x_p = index_1.default(x, "p");
        chai_1.expect(x_p).to.equal("P");
    });
    it("should return undefined if all properties are nullable", function () {
        var x_u_a = index_1.default(x, "u", "a");
        chai_1.expect(x_u_a).to.equal(undefined);
    });
    it("should return undefined if all porperties but the last are nullable", function () {
        var x_u_b = index_1.default(x, "u", "b");
        chai_1.expect(x_u_b).to.equal(undefined);
    });
    it("should return undefined if last property is nullable", function () {
        var x_u0_a = index_1.default(x, "u0", "a");
        chai_1.expect(x_u0_a).to.equal(undefined);
    });
    it("should not have undefined type if all properties are not nullable", function () {
        var x_u0_b = index_1.default(x, "u0", "b");
        chai_1.expect(x_u0_b).to.equal(6);
    });
    it("should return value but have nullable type when index is involved", function () {
        var x_uu_1_a = index_1.default(x, "uu", 1, "a");
        chai_1.expect(x_uu_1_a).to.equal("A");
    });
    it("should return value but have nullable type when otherwise nonnullable but index is involved", function () {
        var x_uu_1_b = index_1.default(x, "uu", 1, "b");
        chai_1.expect(x_uu_1_b).to.equal(4);
    });
});
