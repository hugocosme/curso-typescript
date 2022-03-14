"use strict";
// string (o tipo é inferido no momento que a variavel é criada, assim automaticamente ele reconhece o tipo daquele dado)
var nome = 'Hugo';
console.log(nome);
//nome = 25
//numbers 
var idade = 34;
//idade = 'Hugo'
idade = 33.5;
console.log(idade);
//boolean
var possueHibbies = true;
//possueHibbies = 1
console.log(possueHibbies);
// tipos explicitos (ao colocar : e o tipo como, number, string ou outros a variavel só podera receber aquele tipo de dado)
var minhaIdade;
minhaIdade = 33;
console.log(typeof minhaIdade);
//minhaIdade = 'idade é 33'
console.log(typeof minhaIdade);
//array
var hobbies = ["cozinhar", "esportes"];
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
//hobbies = 100
console.log(hobbies);
// tuplas (posso definir a ordem que os dados devem ser recebidos na variavel endereço)
var endereco = ["Av brasil", 90, "hugo"];
console.log(endereco);
endereco = ["Rua dos teste", 99, "Bloco CD"];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
//Any (pode ser utilizado em alguma migração entre js e ts, mas não deve ser utilizado de forma aleatoria)
var carro = 'BMW';
console.log(carro);
carro = { marcar: 'BMW', ano: 2019 };
console.log(carro);
//funçoes
function retornaMeuNome() {
    //return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oiiii');
    //return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
//console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.3, 9));
//const teste = function (a: number, b: number): boolean {
//    return false
//}
//tipo função
var calculo;
//calculo = digaOi
//calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
//Objetos
var usuario = {
    nome: 'Hugo',
    idade: 33
};
console.log(usuario);
//usuario = {}
//
//usuario = {
//    name = 'Maria',
//    age = 34
//}
usuario = {
    nome: 'maria',
    idade: 35
};
console.log(usuario);
var funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto OK';
        }
        else {
            return 'Fora do horario!';
        }
    }
};
var funcionario2 = {
    supervisores: ['Hugo', 'Jessica'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto OK';
        }
        else {
            return 'Fora do horario!';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(10));
//union types
var nota = 10; // para usar mais de um tipo em uma variavel
console.log("Minha nota \u00E9 ".concat(nota, "!"));
nota = '10';
console.log("Minha nota \u00E9 ".concat(nota, "!"));
//nota = true
//console.log(`Minha nota é ${nota}!`)
// checagem de tipos
var valor = 20;
//valor = false
if (typeof valor === "number") {
    console.log("É um number!");
}
else {
    console.log(typeof valor);
}
//tipo NEVER
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 9,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço Invalido!');
        }
    }
};
produto.validarProduto();
