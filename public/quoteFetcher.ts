type KanyeResponse = {
    quote: string;
}

const quoteElement = document.getElementById("quote") as HTMLParagraphElement;

const button = document.getElementById("fetch-quote") as HTMLButtonElement;

async function fetchQuote(): Promise<KanyeResponse> {
  const response = await fetch("https://api.kanye.rest/");
  return response.json();
}

async function setQuote() {
    const quote = await fetchQuote();
    quoteElement.textContent = quote.quote + " - Kanye West";
}

button.addEventListener("click", setQuote);