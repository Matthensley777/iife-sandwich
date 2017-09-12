var SandwichMaker = (function(maker) {
    var bread = {
        "white": 1,
        "wheat": 1.2
    }

    maker.setBread = function(breadType) {
        return bread[breadType];
    }

    return maker;
})(SandwichMaker || {});