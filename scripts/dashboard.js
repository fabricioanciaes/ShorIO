document.addEventListener('DOMContentLoaded', function() {
    elements = {
        "pauta": {
            "classes":"section.pauta",
            "selector":document.querySelector("section.pauta"),
            "buttons":document.querySelectorAll("section.pauta .behave-radio"),
        },

        "casters": {
            "classes":"section.casters",
            "selector":document.querySelector("section.casters"),
        },
    }

    data = {
        "pauta":[],
        "pautaActiveIndex":0,
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
    
    for(let i=0;i < elements.pauta.buttons.length; i++){
        elements.pauta.buttons[i].addEventListener("click", function(e) {
            for(let i=0;i < elements.pauta.buttons.length; i++){
                buttonSetActive(elements.pauta.buttons[i]);
            }
            data.pautaActiveIndex = i;
            buttonToggle(e.currentTarget);
        });
    }

    function buttonToggle(button) {
        if(button.classList.contains("is-success")){
            buttonSetActive(button);    
        } else 
        if(button.classList.contains("is-danger")){
            buttonSetInactive(button);
        }
    }

    function buttonSetActive(button) {
        button.classList.remove("is-success");
        button.classList.add("is-danger");
    }

    function buttonSetInactive(button) {
        button.classList.remove("is-danger");
        button.classList.add("is-success");
    }

});