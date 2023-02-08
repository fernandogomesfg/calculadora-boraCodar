const teclado = document.getElementById("teclado");
const buttons = ['CE', 'C', '%', '/', 7, 8, 9, 'X', 4, 5, 6, '-', 1, 2, 3, '+', '+/-', 0, ',', '='];

for (const button of buttons) {
    const btn = document.createElement("button");
    btn.innerText = button;

    // verificando se o botao eh um numero ou nao 
    // e atriuir uma classe especifica para estilizar
    if (typeof button === 'number') {
        btn.classList.add("number");
    } else {
        btn.classList.add("operator");
    }

    teclado.appendChild(btn);

    if (buttons.indexOf(button) % 4 === 3) {
        teclado.appendChild(document.createElement("br"));
    }
}

