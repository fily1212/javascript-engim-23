let nomi = ["Giacomo", "Aldo", "Giovanni", "Marina"];
aggiungiNomi();
function aggiungiNomi(){

    let table = document.getElementById("tabella");

    for(let i = 0; i < nomi.length; i++){
        
        let tr = document.createElement("tr");
        let tdNome = document.createElement("td");
        tdNome.className = "nome";
        tdNome.innerHTML = nomi[i];
        let tdNum = document.createElement("td");
        tdNum.innerHTML = i+1;
        tr.appendChild(tdNum);
        tr.appendChild(tdNome);
        table.appendChild(tr);
    } 
}

function coloraRosso(){
    let tdNomi = document.querySelectorAll(".nome");
    for(tdNome of tdNomi){
        tdNome.style.color="red";
        //tdNome.classList.add("rosso");
    }
}

// nella pagina precedente
// inserire un input di testo e
// un bottone aggiungi 
// e aggiungere il nome 
// alla tabella