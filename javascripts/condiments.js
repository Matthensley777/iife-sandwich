var SandwichMaker = (function(maker) {
    var cons = {
        "mayo": .27,
        "oliveoil": .23,
        "ranch": .25,
        "bbq": .21
    }
    maker.setCons = function(consType) {
        return cons[consType];
    }
    return maker
})(SandwichMaker || {});