let formulario = document.querySelector(".form");
formulario.addEventListener("submit", event => {
    event.preventDefault();
    const n = event.target.n.value;

    let resultado = fibonacci(n);
    let textoresultado = document.createElement('h1');
    textoresultado.textContent = resultado;
    document.body.append(textoresultado);

});


function fibonacci(n) {
    let a, b, temp;
    a = 0;
  b = 1;
    let fibonaccixd = [a];
  
  for (let i = 0; i < n; i++) {
    temp = a + b;
    a = b;
    b = temp;
    fibonaccixd.push(a);
  }
  return fibonaccixd;
}

