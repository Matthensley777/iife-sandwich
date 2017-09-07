var SandwichMaker = (function(maker) {
    var meats = {
        "roastbeef": 1,
        "turkey": .50,
        "ham": .25,
        "chicken": .25
    }
    console.log(meats);
    maker.setMeats = function(meatType) {
        return meats[meatType]
    };
    return maker;
})(SandwichMaker || {});