let Vitorias
let Derrotas
let Nivel



function CalcVitoria(Vitorias, Derrotas) {
    return Vitorias - Derrotas;

}

let SaldoVitorias = CalcVitoria(25, 12)

if (SaldoVitorias <= 10) {
    Nivel = "Ferro"
} else if (SaldoVitorias >= 11 && SaldoVitorias <= 20) {
    Nivel = "Bronze";
} else if (SaldoVitorias >= 21 && SaldoVitorias <= 50) {
    Nivel = "Prata";
} else if (SaldoVitorias >= 51 && SaldoVitorias <= 80) {
    Nivel = "Ouro";
} else if (SaldoVitorias >= 81 && SaldoVitorias <= 90) {
    Nivel = "Diamante";
} else if (SaldoVitorias >= 91 && SaldoVitorias <= 100) {
    Nível = "Lendário";
} else {
    Nivel = "Imortal";
}

console.log("O Herói tem de saldo " + SaldoVitorias + " está no nível " + Nivel);
