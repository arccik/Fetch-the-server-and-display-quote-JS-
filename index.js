// Import stylesheets
import "./style.scss";

// variables
const url = "https://favqs.com/api/qotd";

// Write Javascript code!
const appDiv = document.getElementById("app");
const appPre = document.getElementById("son");

const name = document.getElementById("name");
const tags = document.getElementById("tags");
const quote = document.getElementById("quote");

const button = document.getElementById("button");

button.addEventListener("click", getQuote);

function getQuote() {
fetch(url).then(response => response.json()).then(json =>{
  name.innerHTML = json.quote.author;
  tags.innerHTML = [...json.quote.tags];
  quote.innerText = json.quote.body;
});
};

fetch(url)
  .then(response => response.json())
  .then(json => {
    console.log(JSON.stringify(json.quote.author));
    name.innerHTML = json.quote.author;
    tags.innerHTML = [...json.quote.tags];
    quote.innerText = json.quote.body;
  });
