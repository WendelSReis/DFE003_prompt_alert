const numero = prompt("digite um número aqui !");

alert(numero * 2);

let consumo = prompt ("digite o valor da sua conta ");
const taxa = 10;

let garcom = (parseFloat (consumo) * taxa) / 100;
let total = parseFloat(consumo) + garcom;

alert(total);

let valorPizza = prompt ("digite o valor da pizza");
let pessoas = prompt ("digite quantas pessoas comem");
let calculo = parseFloat(valorPizza) / parseFloat (pessoas);

alert("valor por pessoa : R$" +calculo);
