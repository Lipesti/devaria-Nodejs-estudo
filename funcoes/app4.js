const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumero = (numero) => {
    try {
        return Number.parseFloat(numero);

    } catch (e) {
        console.log('Número informado não é valido');

    }
}

const validarOperador = (operador) => {
    switch (operador) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('Operador informado invalido');
            return null;
    }
}

readLine.question('Favor informar um número: ', (numero1) => {
    const numeroValidado1 = validarNumero(numero1)

    if (numeroValidado1) {
        readLine.question('Favor informar um número: ', (numero2) => {
            const numeroValidado2 = validarNumero(numero2)
            if (numeroValidado2) {
                readLine.question('Favor informar o operador: ', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if (operadorValidado) {
                        switch (operadorValidado) {
                            case '+': console.log(`Operador selecionado adição resultado = ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`)
                                break;
                            case '-': console.log(`Operador selecionado subtração resultado = ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`)
                                break;
                            case '/': console.log(`Operador selecionado divisão resultado = ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`)
                                break;
                            case '*': console.log(`Operador selecionado multiplicação resultado = ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`)
                                break;
                            case '%': console.log(`Operador selecionado modulo resultado = ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`)
                                break;
                            default: break;
                        }
                    }
                })
            }
        })
    }

})