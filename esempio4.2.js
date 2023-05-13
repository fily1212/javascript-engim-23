let nomi = ["Giacomo", "Aldo", "Giovanni", "Marina"];

function aggiungiNomi(){

    let table = document.getElementById("tabella");

    for(let i = 0; i < nomi.length; i++){
        
        let tr = document.createElement("tr");
        let tdNome = document.createElement("td");
        tdNome.innerHTML = nomi[i];
        let tdNum = document.createElement("td");
        tdNum.innerHTML = i+1;
        tr.appendChild(tdNum);
        tr.appendChild(tdNome);
        table.appendChild(tr);
    } 
}

// creare una tabella che contenga 
// i nomi e un numero progressivo



/*
let tr = document.createElement("tr");
let td = document.createElement("td");
td.innerHTML = "Aldo";
tr.appendChild(td);
table.appendChild(tr);
*/
/*for(nome of nomi){
    
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = nome;
    tr.appendChild(td);
    table.appendChild(tr);
}*/
/*
for(let i = 0; i < nomi.length; i++){
    
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = nomi[i];
    tr.appendChild(td);
    table.appendChild(tr);
}*/


/*let p = document.getElementById("prova");
console.log(p);
p.innerHTML = "Sto modificando p";*/