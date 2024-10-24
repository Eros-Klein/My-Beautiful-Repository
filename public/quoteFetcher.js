"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const quoteElement = document.getElementById("quote");
const button = document.getElementById("fetch-quote");
function fetchQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://api.kanye.rest/");
        return response.json();
    });
}
function setQuote() {
    return __awaiter(this, void 0, void 0, function* () {
        const quote = yield fetchQuote();
        quoteElement.textContent = quote.quote + " - Kanye West";
    });
}
button.addEventListener("click", setQuote);
