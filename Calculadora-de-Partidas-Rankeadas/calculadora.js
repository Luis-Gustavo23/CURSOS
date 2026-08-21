console.log('Calculadora de partidas Rankeadas\n')

function ranqueadas(vitorias, derrotas) {
    return vitorias - derrotas
}

function nivel(saldoVitorias) {
    if (saldoVitorias <= 10)
        return 'Ferro'
    else if (saldoVitorias <= 20)
        return 'Bronze'
    else if (saldoVitorias <= 50)
        return 'Prata'
    else if (saldoVitorias <= 80)
        return 'Ouro'
    else if (saldoVitorias <= 90)
        return 'Diamante'
    else if (saldoVitorias <= 100)
        return 'Lendário'
    else
        return 'Imortal'
}

function main(saldoVitorias) {
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel(saldoVitorias)}`
}

let saldoVitorias = ranqueadas(15, 4)

console.log(main(saldoVitorias))