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
// tipos explicitos
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
