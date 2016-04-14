class Element {
  constructor (name, template) {
    this.name = name;
    this.template = template;
  }
  draw (parentElement) {
    var $element = $(this.template);
    $element.attr("name", this.name);
    $(parentElement).prepend($element);
    return $element;
  }
}
export default Element;
