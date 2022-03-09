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