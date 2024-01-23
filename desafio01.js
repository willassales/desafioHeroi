// Função para ler a entrada do usuário (pode ser substituída por qualquer método de entrada)
function lerEntrada() {
    const nome = prompt("Digite o nome do herói:");
    const xp = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"));
    return { nome, xp };
}

// Função para determinar o nível do herói com base na XP
function determinarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Função principal
function main() {
    // Obter entrada do usuário
    const { nome, xp } = lerEntrada();

    // Determinar o nível do herói
    const nivel = determinarNivel(xp);

    // Exibir a mensagem final
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Chamar a função principal
main();
