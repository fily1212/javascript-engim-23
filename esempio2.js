/*var x = "12";
var y = "13";
var z = x + y;
console.log(z);

x = "12";
y = x + 13;
console.log(y)
console.log(typeof x);
x = parseInt(x);

console.log(typeof x);

console.log(12 == "12");
console.log(12 === 6+6 );*/

// dichiarare una variabile stringa e provare a convertirla in numero 
// provare l'istruzione typeof

/*
let temperature = [25,23,22,21,23,19,18];

console.log(temperature);
console.log(temperature[0]);
temperature[0] = 20;
console.log(temperature[0]);
let tris = [
    ["","",""],
    ["","",""],
    ["","",""]
];
console.log(tris[0][1])*/

// if
let eta = 14;
if(eta > 14){
    console.log("OK");
    console.log("OK2");
}else{
    console.log("NO");
}

/* ES1: definire base e altezza e stampare "quadrato" o "rettangolo" */

let base = 10;
let altezza = 10; 

if (base == altezza){
    console.log("quadrato");
}else{
    console.log("rettangolo");
}

/*
if (CONDIZIONE){
    // istruzioni da fare se la condizione è vera
}else{
    // istruzioni da fare se la condizione è falsa
}*/


/* ES2: calcolare le imposte in una tassazione progressiva.
Inventarsi in una variabile reddito un numero.
- se si guadagna meno di 2000€ si paga 0€. 
- se si guadagna da 2000€ a 15000€ di questa parte si paga il 10%
- tra 15000 e 30000€ si paga 30%
- 30000 e oltre si paga il 40%

//40000 -> reddito 
2000
13000 -> 10%
15000 -> 30%
10000 -> 40% 

9800
*/

let reddito = 40000;
let imposte = 0;
if(reddito > 30000){
    imposte += (reddito-30000)*.4;
    reddito = 30000;
}
if(reddito > 15000){
    imposte += (reddito-15000)*.30;
    reddito = 15000;
}

console.log(imposte);
// -----------------

let reddito = 40000;
let imposte = 0;
if(reddito < 2000 )
    imposte = 0;
else if(reddito >= 2000 && reddito < 15000)
    imposte = (reddito-2000)*.1;
else if(reddito >= 15000 && reddito < 30000)
    imposte = 1300 + (reddito - 15000) * .3;
else
    imposte = 1300 + 15000*.3 + (reddito - 30000 * .4);

// ES 1: inizializzare le età di due persone e stampare la più grande

let eta1 = 18;
let eta2 = 25;
if(eta1 > eta2){
    console.log(eta1);
}else{
    console.log(eta2);
}

// ES 2: Trovare il numero più piccolo di tre numeri

let x = 1, y = 2, z = 3;
if(x < y && x < z)
    console.log(x);
else if(y < x && y < z)
    console.log(y);
else 
    console.log(z);

// ES 3: controllare se un triangolo è equilatero, scaleno, or isoscele
let l1 = 2, l2 = 3, l3 = 3;
if(l1 == l2 && l2 == l3)
    console.log("Equilatero");
else if(l1 == l2 || l1 == l3 || l2 == l3 )
    console.log("Isoscele");
else
    console.log("Scaleno");