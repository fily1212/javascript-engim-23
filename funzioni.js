let persone = [
    {"nome": "Alyssa", "colore" : "green"},
    {"nome": "Gianni", "colore" : "red"}, 
    {"nome": "giacomo", "colore" : "yellow"}, 
    {"nome": "Claudio", "colore" : "purple"}, 
    {"nome": "Grey", "colore" : "yellow"}, 
    {"nome": "Filippo", "colore" : "orange"}
    ];

let filtrati = persone.filter(
    (persona) => { return persona.colore == 'yellow' }
);

filtrati.forEach((persona)=>{
    let ul = document.getElementById("lista");
    let li = document.createElement("li");
    li.innerHTML=persona.nome;
    ul.appendChild(li);
});

let iniziali = persone.map(persona=>persona.nome[0]);


persone.sort(comparePersone);
persone.reverse();
// negativo se a è più piccolo
// positivo se b è più piccolo
// 0 se uguali
function comparePersone(a,b){
    if(a.nome.toLowerCase() < b.nome.toLowerCase()) return -1;
    if(b.nome.toLowerCase() < a.nome.toLowerCase()) return 1;
    return 0;
}

persone.forEach((persona)=>{
    let ul = document.getElementById("lista");
    let li = document.createElement("li");
    li.innerHTML=persona.nome;
    ul.appendChild(li);
});
console.log(filtrati);
/*


*/

fetch('https://api.open-meteo.com/v1/forecast?latitude=45.07&longitude=7.69&current_weather=true&hourly=weathercode&timezone=CET&daily=weathercode')
  .then(response => response.json())
  .then(passaggi =>{ console.log(passaggi) });

// console.log("ciao");