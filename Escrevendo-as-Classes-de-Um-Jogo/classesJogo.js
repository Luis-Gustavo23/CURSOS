console.log('Classes de Um Jogo\n')

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque

        if (this.tipo === 'mago')
            ataque = 'magia'
        else if (this.tipo === 'guerreiro')
            ataque = 'espada'
        else if (this.tipo === 'monge')
            ataque = 'artes marciais'
        else if (this.tipo === 'ninja')
            ataque = 'shuriken'

        return `o ${this.tipo} atacou usando ${ataque}`
    }
}

const heroi = new Heroi('Gustavo Rodrigues', 24, 'mago')

console.log(heroi.atacar())