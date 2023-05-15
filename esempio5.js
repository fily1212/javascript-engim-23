//fare una funzione che dato un 
//nome e un cognome 
//restituisce una stringa con 
//nome e cognome concatenati e 
//con la prima lettera maiuscola. 


function es1(nome,cognome){
    let nomeL = nome.trim().toLowerCase();
    let cognomeL = cognome.trim().toLowerCase();
    return nomeL.charAt(0).toUpperCase() +
     nomeL.slice(1)+ 
    " " + cognomeL.charAt(0).toUpperCase() + 
    cognomeL.slice(1);
}

console.log(es1("           FilIPpo                ", "Hu"));

function calcoloMinimo(n1,n2){
    return Math.min(n1,n2);
}

function minimo(n1,n2){
    if(n1<n2)
        return n1;
    else
        return n2;
}

