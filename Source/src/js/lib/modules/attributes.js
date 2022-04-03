import $ from "../core";

$.prototype.addAttribute = function (attribute, value) {
  if (!attribute) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].setAttribute(attribute, value);
  }
};

$.prototype.removeAttribute = function (attribute) {
  if (!attribute) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(attribute);
  }
};

$.prototype.toggleAttribute = function (attribute, value) {
  if (!attribute) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(attribute)) {
      this[i].removeAttribute(attribute);
    } else {
      this[i].setAttribute(attribute, value);
    }
  }
};
