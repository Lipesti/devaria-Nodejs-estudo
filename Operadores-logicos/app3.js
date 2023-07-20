const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa verifica se você é maior de 18 anos, e se tem CNH e pode entrar no kart!');
console.log('Alem das verificações feitas, precisamos saber se você está na lista de presença do horario.');

readLine.question('Qual o ano do seu nascimento? ', ano => {
    if (ano > 2004) {
        console.log('Você não tem 18 anos!')
    } else {
        readLine.question('Você tem habilitação? (Sim/Não) ', temHabilitacao => {
            if (!(temHabilitacao.toUpperCase() === 'SIM')) {
                console.log('Você não tem habilitação para entrar no Kart!')
            }else{
                readLine.question('Qual é o seu nome? ', nome =>{
                    switch(nome){
                        case 'Felipe':
                            console.log('Bem vindo ao Kart Felipe');
                            break;
                        case 'Juliana':
                            console.log('Bem vinda ao kart Juliana');
                        default:
                            console.log('Seu nome não foi identificado na lista de presença')
                    }
                })
            }
        })
    }
})
