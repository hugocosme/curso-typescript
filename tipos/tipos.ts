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