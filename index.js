
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const btn = document.querySelector('.next-button');

class Quote {
    constructor(quote, author) {
        this.quoteWords = quote;
        this.authorName = author;
    }
}

const quotes = [
    new Quote('"The only way to do great work is to love what you do."', "Steve Jobs"),
    new Quote('"If you want to achieve greatness, stop asking for permission."', "Warren Buffett"),
    new Quote('"Success is not final, failure is not fatal: it is the courage to continue that counts."', "Winston Churchill"),
    new Quote('"Believe you can and you\'re halfway there."', "Theodore Roosevelt"),
    new Quote('"The best way to predict the future is to invent it."', "Alan Kay"),
    new Quote('"The only limit to our realization of tomorrow will be our doubts of today."', "Franklin D. Roosevelt"),
    new Quote('"The greatest glory in living lies not in never falling, but in rising every time we fall."', "Nelson Mandela"),
    new Quote('"I have not failed. I\'ve just found 10,000 ways that won\'t work."', "Thomas Edison"),
    new Quote('"The only thing necessary for the triumph of evil is for good men to do nothing."', "Edmund Burke"),
    new Quote('"The future belongs to those who believe in the beauty of their dreams."', "Eleanor Roosevelt"),
    new Quote('"The only source of knowledge is experience."', "Albert Einstein"),
    new Quote('"The best time to plant a tree was 20 years ago. The second best time is now."', "Chinese Proverb"),
    new Quote('"The only true wisdom is in knowing you know nothing."', "Socrates"),
    new Quote('"The greatest wealth is to live content with little."', "Plato"),
    new Quote('"The only thing we have to fear is fear itself."', "Franklin D. Roosevelt"),
    new Quote('"The journey of a thousand miles begins with one step."', "Lao Tzu"),
    new Quote('"The only person you are destined to become is the person you decide to be."', "Ralph Waldo Emerson"),
    new Quote('"The only difference between ordinary and extraordinary is that little extra."', "Jimmy Johnson"),
    new Quote('"The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can\'t achieve it."', "Jordan Belfort"),
    new Quote('"The only way to do it is to do it."', "Amelia Earhart"),
    new Quote('"The thing worse than being blind is having sight but no vision."', "Helen Keller"),
    new Quote('"The only thing that is constant is change."', "Heraclitus"),
    new Quote('"The only thing that we know is that we know nothing - and that is the highest flight of human wisdom."', "Leo Tolstoy"),
    new Quote('"The only thing that interferes with my learning is my education."', "Albert Einstein"),
    new Quote('"The only thing we have to do is be happy."', "John Lennon"),
    new Quote('"The only thing that can stop you is the fear of failure."', "Brian Tracy"),
    new Quote('"The only thing that makes sense is to strive for greater collective enlightenment."', "Elon Musk"),
    new Quote('"The only thing that\'s keeping you from getting what you want is the story you keep telling yourself."', "Tony Robbins"),
    new Quote('"The only thing that\'s certain is uncertainty."', "Pliny the Elder"),
    new Quote('"The only thing that\'s truly yours is your time."', "Arnold Bennett"),
    new Quote('"The only thing that\'s worth anything is the effort."', "Antoine de Saint-Exupéry"),
    new Quote('"The only thing that\'s important is that you\'re happy."', "Aristotle"),
    new Quote('"The only thing that\'s important is that you\'re true to yourself."', "Oprah Winfrey"),
    new Quote('"The only thing that\'s important is that you\'re kind."', "Dalai Lama"),
    new Quote('"The only thing that\'s important is that you\'re honest."', "Maya Angelou"),
    new Quote('"The only thing that\'s important is that you\'re brave."', "J.K. Rowling"),
    new Quote('"The only thing that\'s important is that you\'re curious."', "Albert Einstein"),
    new Quote('"The only thing that\'s important is that you\'re creative."', "Maya Angelou"),
    new Quote('"The only thing that\'s important is that you\'re resilient."', "Barack Obama"),
    new Quote('"The only thing that\'s important is that you\'re adaptable."', "Charles Darwin"),
    new Quote('"The only thing that\'s important is that you\'re empathetic."', "Barack Obama")
]

function nextQuote() {
    let quoteNumber = Math.floor(Math.random() * 41);
    quoteText.textContent = quotes[quoteNumber].quoteWords;
    quoteAuthor.textContent = quotes[quoteNumber].authorName;
}

btn.addEventListener("click", nextQuote);