"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const place_1 = require("./place");
const logic_1 = require("./logics/logic");
// console.log(places);
let title = (0, logic_1.getTitle)(place_1.places[0]);
console.log(title);
