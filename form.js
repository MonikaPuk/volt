"use strict";
// VARIABLES

// Buttons
const btnEditOrder = document.getElementById("edit-order");
const btnEditShipping = document.getElementById("edit-shipping");
const btnEditPersonal = document.getElementById("edit-personal");
const btnEditPayment = document.getElementById("edit-payment");

const btnOrder = document.getElementById("btn__order");
const btnShipping = document.getElementById("btn__shipping");
const btnPersonal = document.getElementById("btn__personal");
const btnPayment = document.getElementById("btn__payment");

// Inputs
const inputQtySwap = document.getElementById("inputQtySwap");
const inputQtyBattery = document.getElementById("inputQtyBattery");
// const inputQtySwap = document.getElementById("inputQtySwap");
// const inputQtySwap = document.getElementById("inputQtySwap");
// const inputQtySwap = document.getElementById("inputQtySwap");
// const inputQtySwap = document.getElementById("inputQtySwap");
// const inputQtySwap = document.getElementById("inputQtySwap");
// const inputQtySwap = document.getElementById("inputQtySwap");
// const inputQtySwap = document.getElementById("inputQtySwap");
// const inputQtySwap = document.getElementById("inputQtySwap");
// const inputQtySwap = document.getElementById("inputQtySwap");
// const inputQtySwap = document.getElementById("inputQtySwap");
// const inputQtySwap = document.getElementById("inputQtySwap");


// Data storage
const prices = {
    swapOldPrice: 250,
    swapNewPrice: 179,
    powerBankPrice: 200
};
let User = {
    swapServices: 0,
    powerBanks: 0,
    shippingPrice: 0,
    paymentChoice: "",
    totalPrice: 0,
    userData: {
        fullName: "",
        email: "",
        password: "",
        phoneNr: 0,
        country: "",
        city: "",
        street: "",
        zipCode: 0,
        agreedToTerms: false
    }
}

document.addEventListener("DOMloaded", init());

function init() {
    console.log("Initializing....");
    addEventListeners();
    updatePrices();

}

function addEventListeners() {
    console.log("... adding event listeners");

    btnOrder.addEventListener("click", () => {
        showElement(btnEditOrder);
        hideElement(btnOrder);

        User.swapServices = document.getElementById("inputQtySwap").value;
        User.powerBanks = document.getElementById("inputQtyBattery").value;


        console.log(User);

    });
    btnShipping.addEventListener("click", () => {});
    btnPersonal.addEventListener("click", () => {});
    btnPayment.addEventListener("click", () => {});

    btnEditOrder.addEventListener("click", () => {
        showElement(btnOrder);
        hideElement(btnEditOrder);
    });

    btnEditShipping.addEventListener("click", () => { });
    btnEditPersonal.addEventListener("click", () => { });
    btnEditPayment.addEventListener("click", () => { });

    inputQtySwap.addEventListener("change", (e) => {
        User.swapServices = parseFloat(inputQtySwap.value);
        User.shippingPrice = prices.swapNewPrice * parseFloat(inputQtySwap.value);
        console.log(User);
    });
    inputQtyBattery.addEventListener("change", (e) => {
        User.powerBanks = parseFloat(inputQtyBattery.value);
        User.shippingPrice = prices.swapNewPrice * parseFloat(inputQtySwap.value);
        console.log(User);
    });
}






function hideElement(elem) {
    elem.classList.add("hide");
}
function showElement(elem) {
  elem.classList.remove("hide");
}
function updatePrices() {
    document.getElementById("sec__price--new").innerHTML = prices.swapNewPrice + " DKK";
    document.getElementById("sec__price--old").innerHTML = prices.swapOldPrice + " DKK";
    document.getElementById("sec__price").innerHTML = prices.powerBankPrice + " DKK";
}