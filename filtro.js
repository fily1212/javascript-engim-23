let nomi = ["Alyssa", "Gianni", "Giacomo", "Claudio", "Grey", "Filippo"];

let nomiDaVisualizzare = [];
for(nome of nomi){
    nomiDaVisualizzare.push(nome);
}

mostraNomi();

function mostraNomi(){
    let contenitore = document.getElementById("contenitore-card");
    contenitore.innerHTML = ""; 

    for(nome of nomiDaVisualizzare){
        let h5 = document.createElement("h5");
        h5.innerHTML=nome;
        h5.className="card-title";
        let card = document.createElement("div");
        card.className = "card";
        card.appendChild(h5);
        contenitore.appendChild(card);
    }

}