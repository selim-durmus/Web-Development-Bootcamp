class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  innerRGB() {
    const { r, g, b } = this; // refactored
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this; // destructuring //
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); // to hex method //
  }
}

const c1 = new Color(123, 23, 43, "tomato");
