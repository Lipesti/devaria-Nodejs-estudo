const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const minhaPrimeiraConst = 'Minha primeira constante';
console.log(minhaPrimeiraConst);
let leituradCampo;
readLine.question('Por favor informe o seu nome: ', input =>{
    leituradCampo = input
    console.log(`O usuario digitou ${leituradCampo}`)
});
