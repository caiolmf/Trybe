let a = 1;
let b = 2;

// Soma
console.log('Soma: ' + soma(a, b));
// Subtração
console.log('Subtração: ' + subtracao(a, b));
// Multiplicação
console.log('Multiplicação: ' + multiplicacao(a, b));
// Divisão
console.log('Divisão: ' + divisao(a, b));
// Modulo
console.log('Modulo: ' + modulo(a, b));


function soma(num_a, num_b) {
  let result = num_a+num_b;

  return result;
}

function subtracao(num_a, num_b) {
  let result = num_a-num_b;

  return result;
}

function multiplicacao(num_a, num_b) {
  let result = num_a*num_b;

  return result;
}

function divisao(num_a, num_b) {
  let result = num_a/num_b;

  return result;
}

function modulo(num_a, num_b) {
  let result = num_a % num_b;

  return result;
}

