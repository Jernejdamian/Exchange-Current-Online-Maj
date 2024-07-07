let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let resutElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");

formElement.addEventListener("input", () => {
   
    let rateEuro = 4.31;
    let rateFunt = 5.09;
    let rateDolar = 4.02;

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "euro":
            result = amount / rateEuro;
            break;
        case "funt":
            result = amount / rateFunt;
            break;
        case "dolar":
            result = amount / rateDolar;
            break;
    }

    resutElement.innerText = `${result.toFixed(2)} ${currency} `
})