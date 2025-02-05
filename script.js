function validarCPF() {
    const cpfInput = document.getElementById("input-cpf");
    let validacaoMsg = document.getElementById("validacao-msg")

    let cpf = cpfInput.value.replace(/\D/g, "")

    if (cpf.length !== 11){
        validacaoMsg.textContent = "CPF deve conter 11 dígitos"
        console.log(cpf.length)
        return
    }

    const digits = cpf.toString().split("").map(Number) 


    const digit1 = digits[0]
    const digit2 = digits[1]
    const digit3 = digits[2]
    const digit4 = digits[3]
    const digit5 = digits[4]
    const digit6 = digits[5]
    const digit7 = digits[6]
    const digit8 = digits[7]
    const digit9 = digits[8]
    const digit10 = digits[9] // 1 digito verificador
    const digit11 = digits[10] // 2 digito verificador


    function multiplicaNumero(digit, peso) {
        return digit * peso
    }


    let resultado = (
        multiplicaNumero(digit1, 10) +
        multiplicaNumero(digit2, 9) +
        multiplicaNumero(digit3, 8) +
        multiplicaNumero(digit4, 7) +
        multiplicaNumero(digit5, 6) +
        multiplicaNumero(digit6, 5) +
        multiplicaNumero(digit7, 4) +
        multiplicaNumero(digit8, 3) +
        multiplicaNumero(digit9, 2)
    );

    let resto = resultado % 11
    
    let digitoVerificador1 = resto <= 2 ? 0 : 11 - resto;

    if (digitoVerificador1 !== digit10){
        validacaoMsg.textContent = "CPF inválido."
        console.log("digito 1")
        return
    }

    let resultado2 = (
        multiplicaNumero(digit1, 11) +
        multiplicaNumero(digit2, 10) +
        multiplicaNumero(digit3, 9) +
        multiplicaNumero(digit4, 8) +
        multiplicaNumero(digit5, 7) +
        multiplicaNumero(digit6, 6) +
        multiplicaNumero(digit7, 5) +
        multiplicaNumero(digit8, 4) +
        multiplicaNumero(digit9, 3) +
        multiplicaNumero(digit10, 2)
    )
    
    let resto2 = resultado2 % 11
    let digitoVerificador2 = resto2 <= 2 ? 0 : 11 - resto2

    if (digitoVerificador2 !== digit11) {
        validacaoMsg.textContent = "CPF inválido."
        console.log("digito 2") 
        return
    }

    validacaoMsg.textContent = "CPF válido"
}

document.getElementById("validar-btn").addEventListener("click", validarCPF)
