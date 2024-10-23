const randomBtn = document.querySelector("#randomBtn");
const quote = document.querySelector("#quote");
const teller = document.querySelector("#quotes-teller");
randomBtn.addEventListener("click", buddhaQuotes);
async function buddhaQuotes() {
    let response = await fetch('https://buddha-api.com/api/random?by=buddha')
    let data = await response.json();
    quote.innerHTML = data.text;
    teller.innerHTML = data.byName;

}