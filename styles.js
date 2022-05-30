class Style {
  constructor() {
    this.styles = '';
  }

  addAttribute(attribute, value) {
    this.styles += `${attribute}:${value};`
  }

  toString() {
    return `style="${this.styles}"`;
  }
}

exports.Style = Style;