class Style {
  constructor(attribute, value) {
    this.attribute = attribute;
    this.value = value;
  }

  toString() {
    return `${this.attribute}:${this.value};`
  }
}

exports.Style = Style;