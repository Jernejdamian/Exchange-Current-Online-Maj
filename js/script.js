{
    const calculateResult = (currency, amount) => {
        const rateEuro = 4.31;
        const rateFunt = 5.09;
        const rateDolar = 4.02;

        switch (currency) {
            case "euro":
                return amount / rateEuro;
            case "funt":
                return amount / rateFunt;
            case "dolar":
                return amount / rateDolar;
        }
    }

    const upDateResult = (result, currency) => {
        const resutElement = document.querySelector(".js-result");
        resutElement.innerText = `${result.toFixed(2)} ${currency} `
    }

    const onFormSubmit = () => {
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(currency, amount);

        upDateResult(result, currency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", onFormSubmit)
    }
    init();
}

/*
const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const resutElement = document.querySelector(".js-result");
const currencyElement = document.querySelector(".js-currency");

formElement.addEventListener("input", () => {
   
    const rateEuro = 4.31;
    const rateFunt = 5.09;
    const rateDolar = 4.02;

    const amount = +amountElement.value;
    const currency = currencyElement.value;
    const result;

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
    */