var SandwichMaker = (function(maker) {
    var cheese = {
        "american": .25,
        "chedar": .25,
        "swiss": .25,
        "blue": .25
    }
    maker.setCheese = function(cheeseType) {
        return cheese[cheeseType];
    }
    return maker;
})(SandwichMaker || {});