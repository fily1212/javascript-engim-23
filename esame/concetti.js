/*
- Come collegare js a html (tag script)
- assegnamento di variabile (let ... = ...)
- lista [....]
- oggetti JSON {
    chiave: "valore", 
    chiave2: "valore2"
}
- lista di oggetti: [{...}, {...}]
- let tabella = document.getElementById("id") prende l'oggetto che si riferisce all'elemento nel DOM  
- let elem = document.createElement("div") costruisce
- se voglio mettere del testo dentro all'elemento: 
  elem.innerHTML = "testo da inserire"
- se voglio mettere dei tag dentro un elemento:
  padre.appendChild(figlio)
- elem.classList.add("nome-classe")
  elem.className = "classe1 classe2 classe3"

- for each: for(let elem of list){
    .... istruzioni che voglio ripetere
} 
dove: elem è una nuova variabile che contiene a ogni iterazione un elemento della lista list
- function nomeFunzione(){
    // istruzioni da fare quando viene chiamata nomeFunzione()
}
onclick del bottone
<button onclick="aggiungiCard()">Aggiungi</button>

fetch istruzione per scaricare dei dati esterni e fare qualcosa su quei dati
fetch(URL).then(data=>data.json()).then(data=>{
    let temperaturaDiv = document.getElementById("temp");
    temperaturaDiv.innerHTML = data.temp; 
});
*/
