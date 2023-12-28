// Calculadora de partidas rankeadas

let playerResults = calc(36, 12)
let level

switch(true) {
    case playerResults <= 10:
        level = "Ferro";
        break;
    case playerResults >= 11 && playerResults <= 20:
        level = "Bronze";
        break;
    case playerResults >= 21 && playerResults <= 50:
        level = "Prata";
        break;
    case playerResults >= 51 && playerResults <= 80:
        level = "Ouro";
        break;
    case playerResults >= 81 && playerResults <= 90:
        level = "Diamante";
        break;
    case playerResults >= 91 && playerResults <= 100:
        level = "Lendário";
        break;
    case playerResults >= 101:
        level = "Imortal";
        break;
    default:
        level = "Nível não catalogado!";
}

console.log("O jogador possui um saldo de", playerResults, "vitórias e está no nível de", level)

function calc(wins, loses){
    let balance = wins - loses
    return balance
}