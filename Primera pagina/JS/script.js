"use strict"

let operaciones = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '^': (a, b) => Math.pow(a, b),
};


function operar() {
    let result = document.getElementById('result');
    let n1 = parseInt(document.getElementById('numero1').value);
    let simbolo = document.getElementById('operador').value;
    let n2 = parseInt(document.getElementById('numero2').value);

    let resultado = operaciones[simbolo](n1, n2);
    result.innerHTML = resultado;
}

function primo() {
    let resultado = document.getElementById('resultPrimo');
    let n = parseInt(document.getElementById('primoNumero').value);
    let cont = 0;

    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            cont++;
        }
    }

    console.log(cont)

    if (cont > 2) {
        resultado.innerHTML = "No es primo";
    } else {
        resultado.innerHTML = "Es primo"
    }


}

