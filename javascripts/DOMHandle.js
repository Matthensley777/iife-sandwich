var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meats");
var breadChooser = document.getElementById("bread");
var vegieChooser = document.getElementById("vegies");
var cheeseChooser = document.getElementById("cheese");
var condimentChooser = document.getElementById("condiments");
var finalPrice = document.getElementById("finalPrice");




breadChooser.addEventListener("change", function(event) {
    if (event.target.checked === true) {
        var breadPrice = SandwichMaker.setBread(event.target.value);
        SandwichMaker.addTopping(breadPrice);

    } else if (event.target.checked === false) {
        var breadPrice = SandwichMaker.setBread(event.target.value) * -1;
        SandwichMaker.addTopping(breadPrice);
    }

    // finalPrice.innerHTML = SandwichMaker.getTopping();
})

meatChooser.addEventListener("change", function(event) {
    if (event.target.checked === true) {
        var meatPrice = SandwichMaker.setMeats(event.target.value);
        SandwichMaker.addTopping(meatPrice);

    } else if (event.target.checked === false) {
        var meatPrice = SandwichMaker.setMeats(event.target.value) * -1;
        SandwichMaker.addTopping(meatPrice);
    }
    // finalPrice.innerHTML = SandwichMaker.getTopping();
})

vegieChooser.addEventListener("change", function(event) {
    if (event.target.checked === true) {
        var vegiePrice = SandwichMaker.setVegies(event.target.value);
        SandwichMaker.addTopping(vegiePrice);

    } else if (event.target.checked === false) {
        var vegiePrice = SandwichMaker.setVegies(event.target.value) * -1;
        SandwichMaker.addTopping(vegiePrice);
    }
    // finalPrice.innerHTML = SandwichMaker.getTopping();
})

cheeseChooser.addEventListener("change", function(event) {
    if (event.target.checked === true) {
        var cheesePrice = SandwichMaker.setCheese(event.target.value);
        SandwichMaker.addTopping(cheesePrice);

    } else if (event.target.checked === false) {
        var cheesePrice = SandwichMaker.setCheese(event.target.value) * -1;
        SandwichMaker.addTopping(cheesePrice);
    }

    // finalPrice.innerHTML = SandwichMaker.getTopping();
})

condimentChooser.addEventListener("change", function(event) {
    if (event.target.checked === true) {
        var consPrice = SandwichMaker.setCons(event.target.value);
        SandwichMaker.addTopping(consPrice);

    } else if (event.target.checked === false) {
        var consPrice = SandwichMaker.setCons(event.target.value) * -1;
        SandwichMaker.addTopping(consPrice);
    }

    // finalPrice.innerHTML = SandwichMaker.getTopping();
})

document.getElementById("button").addEventListener("click", function() {
    finalSandwichPrice = SandwichMaker.getTotalPrice();
    finalPrice.innerHTML = `total: $${finalSandwichPrice}`;
})