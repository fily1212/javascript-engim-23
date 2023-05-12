// ITERAZIONE WHILE

/*while (CONDIZIONE){
    // istruzioni che voglio ripetere se la condizione è vera
}

if(CONDIZIONE){

}

while(caffe brucia){
    aspetta
}
*/
/*
// STAMPARE I NUMERI DA 0 A 9
let n = 0;
while(n < 10){
    console.log(n);
    n++;
}

// ES 10 a 0 
//(solo i pari)
n = 11;
while(n >= 0){
    if(n % 2 == 0){
        console.log(n);
    }
    n--; 
}

for(let i = 0; i < 10; i++){
    console.log(i);
}
/*for(INIZIALIZZAZIONE; CONDIZIONE; AGGIORNAMENTO){
    ISTRUZIONI DA RIPETERE 
}*/
for(let i = 10; i >= 0; i--){
    console.log(i);
}

for(let i = 10; i >= 0; i--){
    if(i % 2 == 0)
        console.log(i);
}


//stampare tutti gli elementi di un array
let array = [1,2,3,4,5,6,7];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

for(numero of array){
    if(numero%2==0)
    console.log(numero);
}

// ES 1: stampare i numeri pari di un array
// esempio: let array = [1,2,3,4,5,6] voglio stampare 2 4 6 
let array = [5,6,5,7];
for(let i = 0; i < array.length; i++){
    if(array[i]%2==0)
    console.log(array[i]);
}

// ES 2: dati due array di dimensione uguale, calcolare il vettore somma
// esempio: let array1 = [1,2,3]; let array2 = [4,5,6]
// risultato [5,7,9]

let risultato = []
// hint: push
*/
