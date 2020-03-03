const inpNavn = document.querySelector("#inpNavn");
const inpMeld = document.querySelector("#inpMeld");
const divMeld = document.querySelector("#meldinger");

const db = firebase.firestore();
const chat= db.collection("chat");

function LeggTilMeld(){
  chat.add({
    fra: inpNavn.value,
    tekst: inpMeld.value
  })
}

chat.onSnapshot(snapshot => skrivResultat(snapshot));
function skrivResultat (snapshot){
  snapshot.docChanges(). forEach(element => lagHTML(element.doc.data()));
}

function lagHTML(chatData){
  divMeld.innerHTML += `
  <div id="mld">
    <div id="fra">${chatData["fra"]} </div>
    <div id="tekst"> ${chatData["tekst"]} </div>  </div>
    `
}
