var SandwichMaker = (function(maker) {
    var vegies = {
        "tomato": .53,
        "lettus": .52,
        "pickle": .51,
        "olives": .54
    }
    maker.setVegies = function(vegiesType) {
        return vegies[vegiesType];
    }
    return maker;
})(SandwichMaker || {});