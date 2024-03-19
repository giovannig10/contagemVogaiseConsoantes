let vogais = ["a", "e", "i", "o", "u"];
let consoantes = ["b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]
let frase = "giovanni na parada"; 
frase = frase.toLowerCase();
let letras = frase.split("");
let letrasVogais = [];
let letrasConsoantes = [];
for(let i = 0; i < letras.length; i++){
    if (vogais.includes(letras[i])) {
        letrasVogais.push(letras[i]);
        
     } else (consoantes.includes(letras[i])) {
        letrasConsoantes.push(letras[i]);
    }
}
console.log("texto original:", frase);
console.log("vogais encontradas:", letrasVogais.toString());
console.log("total de vogais:" + letrasVogais.length);
console.log("total de consoantes:" + letrasConsoantes.length);
console.log("consoantes encontradas:", letrasConsoantes.toString());
console.log("total de espaços:" + totalEspacos.lenght);