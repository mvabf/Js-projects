const validarString = (userInput) => {
    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] != 0 && userInput[i] != 1) {
            alert('Number must be 0 or 1');
            return false;
        }
    }
    return true;
}

function converter () {
    let userInput = document.getElementById("userInput").value;
    let saida = 0;
    const validar = validarString(userInput);

    if (validar) {
        for (let i = 0; i < userInput.length; i++) {
            let aux = (userInput.length - 1) - i;
            console.log(aux);
            saida += userInput[i] * Math.pow(2, aux);
        }
    }
    document.getElementById("userOutput").innerHTML = saida;
}

