function multiply(x, y) {
  return x * y;
}

function square(x) {
  return multiply(x, x);
}

function IsTriangle(x, y, z) {
  return square(x) + square(y) == square(z);
}

IsTriangle(3, 4, 5);
