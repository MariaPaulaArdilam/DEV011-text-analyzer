const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    // separar el texto por palabras 
    const textAArry = text.split(" ");
    let wordcount = 0;

    for (let index = 0; index < textAArry.length; index++) {

      if (textAArry[index] !== "") {
        wordcount = wordcount + 1;
      }
    }
    return wordcount
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    let numeroCaracteres = 0
    for (let i = 0; i < text.length; i++) {
      numeroCaracteres = numeroCaracteres+1
    }
    return numeroCaracteres
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textCountExcludingSpaces = text.replace(/[^a-zA-Z0-9 ]/g, '');
    textCountExcludingSpaces.replace(/\s/g, '');
    let wordcountcaracter = 0;

    for (let i = 0; i < textCountExcludingSpaces.length; i++) {
      if (textCountExcludingSpaces[i] !== " ") {
        wordcountcaracter++;
      }

    }
    return wordcountcaracter;

  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const textAArry = text.split(/\s+/);
    let wordcount = 0;
    let CharacterCount = 0;

    for (let index = 0; index < textAArry.length; index++) {

      if (textAArry[index].trim() !== "") {
        wordcount = wordcount + 1;
        CharacterCount += textAArry[index].length
      }
    }
    const totalAverage = CharacterCount / wordcount;
    return parseFloat(totalAverage.toFixed(2));

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const textCountNumber = text.split(/\s+/);
    let wordcountNumber = 0;

    for (let i = 0; i < textCountNumber.length; i++) {
      if (!isNaN(textCountNumber[i])) {
    
        wordcountNumber++;
      }

    }
    return wordcountNumber;

  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const CountNumberSum = text.replace(/\b(?:[A-Za-z]+\d|\d+[A-Za-z]+|[A-Za-z]+)\b/g, '').trim().split(" ")
    let textcountNumberSum = 0;


    for (let i = 0; i < CountNumberSum.length; i++) {
      CountNumberSum[i].replace()
      if (!isNaN(CountNumberSum[i])) {
        textcountNumberSum += Number(CountNumberSum[i]);
      }

    }
    return textcountNumberSum;

  },
};

export default analyzer;
