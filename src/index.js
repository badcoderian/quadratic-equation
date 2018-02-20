module.exports = function solveEquation(equation) {
  let [a, b, c] = splitter(equation)
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d > 0) {
    x1 = (-b + Math.sqrt(d))/(2*a)
    x2 = (-b - Math.sqrt(d))/(2*a)
  } else {
    let rp = -b/(2*a);
    let ip = Math.sqrt(-d)/(2*a);
    x1 = rp + ip;
    x2 = rp - ip; 
  }
  x1 = Math.round(x1);
  x2 = Math.round(x2);
  return [x1, x2].sort((a, b) => a - b);
}

function splitter(stri) {
  stri = stri.split(' ');
  let a = stri[0]
  let i = stri.indexOf('x^2');
  let b = stri[i + 1] + stri[i + 2];
  let c = stri[stri.length - 2] + stri[stri.length - 1]
  return [parseInt(a), parseInt(b), parseInt(c)];
}