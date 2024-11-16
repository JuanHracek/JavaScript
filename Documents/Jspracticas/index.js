console.log('buebas');

let formulario = document.querySelector(".form");
formulario.addEventListener("submit", event => { 
    event.preventDefault();
    const base = parseInt(event.target.base.value);
  

    let resultado = facotial(base);
    let textoresultado = document.createElement('h1');
    textoresultado.textContent = resultado;
    document.body.append(textoresultado);


    
     });


     function facotial(base) {
        let res = 1;
        for(let i = 1; i <= base; i++) {
            res *= i;
        }
        return res;
        
    }

