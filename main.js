function pretragaPokemona(){
  const ispisInput = document.getElementById("ispis")
  const poljeInput = document.getElementById("polje")
  const dugmeInput = document.getElementById("dugme")
  let sablon = ""
  fetch(`https://api.pokemontcg.io/v1/cards?name=${poljeInput.value}`)
.then(response => response.json())
.then(data => {
  console.log(data)
  for(i=0; i<data.cards.length; i++){
sablon += `
<div>
  <h1>${data.cards[i].name}</h1>
  <p>Type: <em>${data.cards[i].types}</em></p>
  <img src="${data.cards[i].imageUrl}">
  </div>
`
}
ispis.innerHTML = sablon
})
}
dugme.addEventListener("click", pretragaPokemona)
