let vogais = ["a", "e", "i", "o", "u"];
let consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
let frase = "Giovanni na parada";
frase = frase.toLowerCase()
let letras = frase.split("");
let totalVogais = [];
let totalConsoantes = [];
let vazio = [" "];
let espaco = [];
for(i = 0; i < letras.length; i++){
    if(vogais.includes(letras[i])){
        totalVogais.push(letras[i])
    }else 
    if(consoantes.includes(letras[i])){
        totalConsoantes.push(letras[i])
    }else
    if(vazio.includes(letras[i])){
    espaco.push(letras[i])
    }
}

console.log("frase original:" + frase)
console.log("o total de vogais é:" + totalVogais.length)
console.log ("vogais encontradas:" + totalVogais.toString())
console.log("total de consoantes é:" + totalConsoantes.length)
console.log("consoantes encontradas:" + totalConsoantes.toString())
console.log("total de espaços:" + espaco.length)