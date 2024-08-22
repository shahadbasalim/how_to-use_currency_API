fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=033f09567e2049a8b6033a8f5ea49114")
.then((result) => {
    let myData = result.json();
    return myData;
}).then((currency) => {
    let amount = document.querySelector(".amount");
    let egpPrice = document.querySelector(".egp span");
    let sarPrice = document.querySelector(".sar span");

    egpPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["EGP"]);
    sarPrice.innerHTML = Math.round(amount.innerHTML * currency.rates["SAR"]);
})

