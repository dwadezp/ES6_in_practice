'use strict';
import Element from './Element.js';

class InputElement extends Element{
  constructor(name, template, type) {
    super(name, template);
    this.type = type;
  }
  draw  (parentElement) {
    let input = super.draw.call(this, parentElement);
    input.prop ("type", this.type);
  }
}
export default InputElement;
