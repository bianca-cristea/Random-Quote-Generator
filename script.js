let quote = document.querySelector('#quote');
let author = document.querySelector('#author');
let btn = document.querySelector('#btn-quote');
let container = document.querySelector('.quote-container');
const url = 'https://api.quotable.io/random';

let getQuote = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      quote.textContent = `${data.content}`;
      author.textContent = `${data.author}`;
    });
};
window.addEventListener('load', getQuote);
btn.addEventListener('click', getQuote);
