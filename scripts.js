const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)
    const dolarToday = 5.76
    const euroToday = 6.23
    const libraToday = 7.46
    const bitcoinToday = 474.394
    const ShekelNovoIsraelenseToday = 0.64
    const RubloRussoToday = 0.069
    const ieneToday = 0.039

    if(currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if(currencySelect.value == "Shekel Novo Israelense") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("he-IL", {
            style: "currency",
            currency: "ILS"
        }).format(inputCurrencyValue / ShekelNovoIsraelenseToday)
    }

    if(currencySelect.value == "rublo russo") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
        }).format(inputCurrencyValue / RubloRussoToday)
    }

    if(currencySelect.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar") {
     currencyName.innerHTML = "Dólar americano"
     currencyImage.src = "./assets/dolar.png"  
    }
  
    if(currencySelect.value == "euro") {
     currencyName.innerHTML = "Euro"
     currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra") {
     currencyName.innerHTML = "Libra esterlina"
     currencyImage.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin") {
     currencyName.innerHTML = "Bitcoin"
     currencyImage.src = "./assets/bitcoin.png"
    }

    if(currencySelect.value == "Shekel Novo Israelense") {
     currencyName.innerHTML = "Shekel Novo Israelense"
     currencyImage.src = "./assets/shekel.png"
    }

    if(currencySelect.value == "rublo russo") {
     currencyName.innerHTML = "Rublo Russo"
     currencyImage.src = "./assets/rublo.png"
    }

    if(currencySelect.value == "iene") {
     currencyName.innerHTML = "Iene japonês"
     currencyImage.src = "./assets/iene.png"
    }

    if(currencySelect.value == "real") {
     currencyName.innerHTML = "Real brasileiro"
     currencyImage.src = "./assets/real.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)