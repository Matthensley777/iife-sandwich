var SandwichMaker = (function(maker) {
    var bread = {
        "white": 1,
        "wheat": 1.2
    }
    console.log(bread);

    maker.setBread = function(breadType) {
        return bread[breadType];
    }

    return maker;
})(SandwichMaker || {});