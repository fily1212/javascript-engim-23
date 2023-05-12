// definizione di funzione
function pariDispari(num){
    let x = 1;

    if(num % 2 == 0)
        console.log("È pari");
    else
        console.log("È dispari");
    console.log(x);
}
let x = 2;
let numero = 6;
// chiamata di funzione
pariDispari(numero);
console.log(x);

function somma(x, y){
    return x + y;
}

let sum = somma(x, 5);
// let sum = 7;
console.log(somma(2,3));
console.log(somma(somma(3, 4), 5));

// ES funzione senza return: stampare il fattoriale di n
function stampaFattoriale(n){
    console.log(fattoriale(n));
}
stampaFattoriale(4);

// ES con return: restituire il fattoriale di n
function fattoriale(n){
    let tot = 1;
    for(let i = 2; i <= n; i++)
        tot *= i;
    return tot;
}



function m1(b){
    return !b;
}

function m2(b){
    return !m1(b);
}

console.log(m2(4 !== 5));



