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

const btnFinalConfirm = document.getElementById("finalConfirm");


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

// DOM elements that are being targeted often
const allTextDetails = document.querySelectorAll(".product__details > .text--details");
const allTextTitles = document.querySelectorAll(".product__details > h3");
const allProductsDetails = document.querySelectorAll(".product__details");
const oldPriceText = document.getElementById("sec__price--old");

// Sections
const sectionOrder = document.getElementById("sectionOrder");
const sectionShipping = document.getElementById("sectionShipping");
const sectionPersonal = document.getElementById("sectionPersonal");
const sectionPayment = document.getElementById("sectionPayment");


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
    totalSwapPrice: 0,
    totalBankPrice: 0,
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
    initPrices();

    hideElement(sectionShipping);
    hideElement(sectionPersonal);
    hideElement(sectionPayment);
    hideElement(btnFinalConfirm);


}

function addEventListeners() {
    console.log("... adding event listeners");
    // confirming section btns
    btnOrder.addEventListener("click", () => confirmOrder());
    btnShipping.addEventListener("click", () => {});
    btnPersonal.addEventListener("click", () => {});
    btnPayment.addEventListener("click", () => {});
    // edit section btns
    btnEditOrder.addEventListener("click", () => {
        showElement(btnOrder);
        hideElement(btnEditOrder);
        allTextDetails.forEach(elem => showElement(elem));
        allTextTitles.forEach(elem => elem.style.fontWeight = "900");
        allTextTitles.forEach(elem => elem.style.fontSize = "1em");
        allTextTitles.forEach(elem => elem.style.width = "auto");
        allProductsDetails.forEach(elem => elem.style.display = "inline");
        showElement(oldPriceText);
        showElement(inputQtySwap);
        showElement(inputQtyBattery);

        document.getElementById("step1-5").style.fill = "white";
        document.getElementById("step2").style.fill = "white";
        document.getElementById("active").style.transform = "translateX(0%)";
        

    });
    btnEditShipping.addEventListener("click", () => { });
    btnEditPersonal.addEventListener("click", () => { });
    btnEditPayment.addEventListener("click", () => { });
    // listen to input changes
    inputQtySwap.addEventListener("change", () => updateOrderInputs());
    inputQtyBattery.addEventListener("change", () => updateOrderInputs());
}

function updateOrderInputs() {
    User.swapServices = parseFloat(inputQtySwap.value);
    User.powerBanks = parseFloat(document.getElementById("inputQtyBattery").value);
    User.totalSwapPrice = User.swapServices * prices.swapNewPrice;
    User.totalBankPrice = User.powerBanks * prices.powerBankPrice;
    let oldServicePrice = prices.swapOldPrice * User.swapServices;
    updatePrices(User.totalSwapPrice, oldServicePrice, User.totalBankPrice);

    // User.shippingPrice = prices.swapNewPrice * parseFloat(inputQtySwap.value);



}



function confirmOrder() {
    showElement(btnEditOrder);
    hideElement(btnOrder);

    allTextDetails.forEach(elem => hideElement(elem));
    allTextTitles.forEach(elem => elem.style.fontWeight = "700");
    allTextTitles.forEach(elem => elem.style.fontSize = "0.8em");
    allTextTitles.forEach(elem => elem.style.width = "40vw");
    allProductsDetails.forEach(elem => elem.style.display = "flex");
    allProductsDetails.forEach(elem => (elem.style.justifyContent = "space-between"));
    hideElement(oldPriceText);
    hideElement(inputQtySwap);
    hideElement(inputQtyBattery);
    
    document.getElementById("step1-5").style.fill = "#a6cc45";
    document.getElementById("step2").style.fill = "#a6cc45";
    document.getElementById("active").style.transform = "translateX(45%)";

    showElement(sectionShipping);

    console.log(User);

}


//         shippingPrice: 0,
//             paymentChoice: "",
//                         totalPrice: 0,






function updatePrices(servicePrice, oldServicePrice, bankPrice) {
    document.getElementById("sec__price--new").innerHTML =
      servicePrice + " DKK";
    document.getElementById("sec__price--old").innerHTML =
      oldServicePrice + " DKK";
    document.getElementById("sec__price").innerHTML = bankPrice + " DKK";

    console.log(servicePrice, oldServicePrice, bankPrice);
    
}









function hideElement(elem) {
    elem.classList.add("hide");
}
function showElement(elem) {
    elem.classList.remove("hide");
}
function initPrices() {
    document.getElementById("sec__price--new").innerHTML = prices.swapNewPrice + " DKK";
    document.getElementById("sec__price--old").innerHTML = prices.swapOldPrice + " DKK";
    document.getElementById("sec__price").innerHTML = prices.powerBankPrice + " DKK";
}