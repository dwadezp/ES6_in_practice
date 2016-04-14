import Element from './Element.js';
import InputElement from './InputElement.js';

let testForm = new Element("form", "<form></form>");
let testInput = new InputElement("password", "<input></input>", "password");
debugger;
testForm.draw("body");
testInput.draw("form");

