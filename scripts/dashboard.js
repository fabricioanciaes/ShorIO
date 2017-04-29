var elements = {
    "pauta": {
        "classes":".panel.pauta",
        "selector":document.querySelector(".panel.pauta"),
    },

    "casters": {
        "classes":".panel.casters",
        "selector":document.querySelector(".panel.casters"),
    },
}

let data = {
    "pauta":[],
    "casters":[],
}

const forEach = function (array, callback, scope) {
    for (let i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
};

function getValues(panel, targetArray) {
    const myNodeList = document.querySelectorAll(panel.classes+ ' .value');
    let array = [];

    forEach(myNodeList, function(index,value) {
        array.push(value.value);
    });

    return array;
}