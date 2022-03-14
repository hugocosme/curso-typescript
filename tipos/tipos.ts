// string (o tipo é inferido no momento que a variavel é criada, assim automaticamente ele reconhece o tipo daquele dado)
let nome = 'Hugo'
console.log(nome)
//nome = 25

//numbers 
let idade: number = 34
//idade = 'Hugo'
idade = 33.5
console.log(idade)

//boolean
let possueHibbies: boolean = true
//possueHibbies = 1
console.log(possueHibbies)

// tipos explicitos (ao colocar : e o tipo como, number, string ou outros a variavel só podera receber aquele tipo de dado)
let minhaIdade: number
minhaIdade = 33
console.log(typeof minhaIdade)
//minhaIdade = 'idade é 33'
console.log(typeof minhaIdade)

//array
let hobbies: any[] = ["cozinhar", "esportes"]
console.log(hobbies[0])
console.log(hobbies[1])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
//hobbies = 100
console.log(hobbies)

// tuplas (posso definir a ordem que os dados devem ser recebidos na variavel endereço)
let endereco: [string, number, string] = ["Av brasil", 90, "hugo"]
console.log (endereco)

endereco = ["Rua dos teste", 99, "Bloco CD"]
console.log(endereco)

//enums
enum Cor {
    Cinza, //0
    Verde = 100, //1
    Azul = 2, //2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

//Any (pode ser utilizado em alguma migração entre js e ts, mas não deve ser utilizado de forma aleatoria)
let carro: any = 'BMW'
console.log(carro)
carro = {marcar: 'BMW', ano:2019}
console.log(carro)

//funçoes
function retornaMeuNome(): string{
    //return minhaIdade
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oiiii')
    //return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

//console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.3,9))

//const teste = function (a: number, b: number): boolean {
//    return false
//}

//tipo função
let calculo: (numeroA: number, numeroB: number) => number
//calculo = digaOi
//calculo()

calculo = multiplicar
console.log(calculo(5, 6))

//Objetos
let usuario: { nome: string, idade: number } = {
    nome: 'Hugo',
    idade: 33
}
console.log(usuario)

//usuario = {}
//
//usuario = {
//    name = 'Maria',
//    age = 34
//}

usuario = {
    nome: 'maria',
    idade: 35
}
console.log(usuario)





//Alias para um type
type Funcionario = {
    supervisores: string [],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto OK'
        } else {
            return 'Fora do horario!'
        }
    }
}

let funcionario2: {
    supervisores: string[], //posso passar o tipo direto assim, ou utilizando um tipo personalizado como na variavel acima 'funcionario'
    baterPonto: (horas:number) => string
} = {
    supervisores: ['Hugo', 'Jessica'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto OK'
        } else {
            return 'Fora do horario!'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(10))

//union types
let nota: number | string = 10 // para usar mais de um tipo em uma variavel
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)
//nota = true
//console.log(`Minha nota é ${nota}!`)

// checagem de tipos
let valor = 20
//valor = false

if (typeof valor === "number") {
    console.log("É um number!")
} else {
    console.log(typeof valor)
}

//tipo NEVER

function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 9,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0) {
            falha('Preço Invalido!')
        }
    }
}

produto.validarProduto()

//type NULL

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '998899880988',
    tel2: null
}

console.log(contato1)
console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null //any!
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)

//desafio para atribuir tipos

type ContaBancaria = { // criado o type contabancaria e foi atribuido dentro da variavel 'contaBancaria' abaixo
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type Correntista = { // criado o type Correntista e atribuido dentro da variavel 'Correntista' abaixo
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Hugo Cosme',
    contaBancaria: contaBancaria,
    contatos: ['09798986','0978564331']
}

correntista.contaBancaria.depositar(4)
console.log(correntista)