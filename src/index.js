let nomeHeroi = "Zelda";
let XP = 9500;
let rank;

switch (true) {
    case XP <= 1000:
        rank = "Ferro";
        break
    case XP >= 1001 && XP <= 2000:
        rank = "Bronze";
        break
    case XP >= 2001 && XP <= 5000:
        rank = "Prata"
        break
    case XP >= 6001 && XP <= 7000:
        rank = "Ouro";
        break
    case XP >= 7001 && XP <= 8000:
        rank = "Platina";
        break
    case XP >= 8001 && XP <= 9000:
        rank = "Ascendente";
        break
    case XP >= 9001 && XP <= 10000:
        rank = "Imortal"
        break
    case XP >= 10001:
        rank = "Radiante"
        break
    default:
        console.log("Heroi sem classificação");
}

console.log(`O Heroi de nome ${nomeHeroi} está no nivel de ${rank}`);