const quoteBox = document.getElementById('quote-box');
let quoteCounter = 1;
let quoteType = "All";
let quoteTypeIndex;

const getRandomIndex = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomQuote = (quoteSelection) => {
    let randomNumber = getRandomIndex(0, quoteSelection.length - 1);
    let firstFragment = quoteSelection[randomNumber].begin;
    randomNumber = getRandomIndex(0, quoteSelection.length - 1);
    let secondFragment = quoteSelection[randomNumber].middle;
    randomNumber = getRandomIndex(0, quoteSelection.length - 1);
    let thirdFragment = quoteSelection[randomNumber].end;
    return firstFragment + ' ' + secondFragment + ' ' + thirdFragment;
}

const updateQuoteCounter = () => {
    quoteCounter = document.getElementById('quote-counter').value;  
}


const updateQuoteType = () => {
    quoteTypeIndex = document.getElementById("quote-type");
    quoteType = quoteTypeIndex.options[quoteTypeIndex.selectedIndex].textContent;
    quoteBox.innerHTML = "";
}


const showQuotes = () => {
    quoteBox.innerHTML = "";
    let quoteSelection = quotes.filter(quote => quote.category === quoteType);
    if (quoteType === 'All'){
        quoteSelection = quotes;
    }
    for (let i=0; i < quoteCounter; i++) {
      let quote = randomQuote(quoteSelection);
      let para = document.createElement('p');
      para.innerHTML = quote;
      quoteBox.append(para);
    }
}