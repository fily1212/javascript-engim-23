let a = 'ciao';
a = "l'area";
let b = 2 + 3;
console.log(a);
console.log(b);
b = 4;
console.log(b);

//alert("Ciao!");
// QUESTO NON VIENE ESEGUITO

/* 
QUESTO NON VIENE ESEGUITO
NEMMENO QUESTO
*/
let base= 10;
let altezza= 20;
console.log("La tua area è \n" + (base * altezza) + " cm" );

console.log(base == altezza)

let num = 5;
console.log(num % 2);

base++;
base = base + 1;
base += 1;

base--;
base -= 1;
base = base - 1;

// true se la base è pari
console.log(base % 2 == 0);

// true se l'altezza è divisibile per 10
console.log(altezza % 10 == 0);

let anno = 2023;

// true se la base e l'altezza sono pari

console.log(base % 2 == 0 && altezza % 2 == 0 );

// true se è bisestile
// Un anno è bisestile se: è divisibile per 4 e non per 100,
// o lo è se è divisibile per 400
// 2000 : true / 2012 : true / 2023 : false  1900: false
console.log(anno%4==0 && anno % 100 != 0 || anno % 400 == 0);
