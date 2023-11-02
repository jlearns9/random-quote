import { quotes } from "./quotes.js"

const quoteText = document.getElementById('quote-text')
const quoteAuthor = document.getElementById('quote-author')

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex]
    quoteText.innerHTML = randomQuote.quote
    quoteAuthor.innerHTML = `- ${randomQuote.author}`
}

displayRandomQuote()