// Perguntas o valor da nofa fiscal de entrada
let income = prompt("Qual o valor da nota fiscal de entrada?");
// Perguntar o valor da nota fiscal de saída
let costs = prompt("Qual o valor da nota fiscal de saída?");
// Perguntar o valor dos impostos deduzidos
let taxPercent = prompt("Qual a porcentagem de dos impostos?");
// Calcular o bruto
let grossProfit = costs - income;
// Valor dos impostos
let tax = grossProfit * taxPercent / 100;
// Valor do líquido
let netIncome = grossProfit - tax;
// Mostrar no site
document.write(" Seu lucro é de $" + netIncome);
