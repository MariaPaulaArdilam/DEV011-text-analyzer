import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const prueba = document.querySelector("textarea");
const divWordCount = document.querySelector("li[data-testid='word-count']");
const divgetCharacterCount = document.querySelector("li[ data-testid='character-count']");
const divgetCharacterCountExcludingSpaces = document.querySelector("li[ data-testid= 'character-no-spaces-count']");
const divgetNumberCount = document.querySelector("li[data-testid='number-count']"); 
const divgetNumberSum = document.querySelector("li[data-testid='number-sum']");
const divgetAverageWordLength = document.querySelector("li [data-testid='word-length-average']")

prueba.addEventListener("keyup", (event) => { //
  const palabras = event.target.value

  const resultado = analyzer.getWordCount(palabras)
  // divWordCount.innerHTML = 'Palabras: '+'<span>'+ resultado +'</span>'
  divWordCount.innerHTML = `Palabras: <span>${resultado}</span>`

  const resultado1 = analyzer.getCharacterCount(palabras)
  divgetCharacterCount.innerHTML = `Caractares: <span>${resultado1}<span/>`

  const resultado2 = analyzer.getCharacterCountExcludingSpaces(palabras)
 divgetCharacterCountExcludingSpaces.innerHTML = `Caracteres sin espacio:<span>${resultado2}</span>`

  const resultado3 = analyzer.getNumberCount(palabras)

  divgetNumberCount.innerHTML= `Números <sapn>${resultado3}</span>`


  const resultado4 = analyzer.getNumberSum(palabras)
  divgetNumberSum.innerHTML= `Suma <span>${resultado4}</span>`
  
  const resultado5 = analyzer.getAverageWordLength(palabras)
  divgetAverageWordLength.innerHTML= `Longitud media <span>${resultado5}</span>`



})


const botonLimpiar = document.getElementById("reset-button");
botonLimpiar.addEventListener("click", () => {
  prueba.value = "";

})