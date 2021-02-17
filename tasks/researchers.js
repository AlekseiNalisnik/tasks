function test(explorers) {
    let places = [];
    let output = [];
    let outputIndex = 0;

    explorers.forEach(exp => {
        exp.forEach((element, index) => {
            if (!places.includes(element)) {
                if (index > 0) {
                    places.push(element);

                    if (!output[outputIndex]) {
                        output[outputIndex]= [];
                    }
                    output[outputIndex].push(element);
                    
                    if (!output[outputIndex].includes(element[0])) {
                        output[outputIndex].push(exp[0]);
                    }
                    
                    outputIndex++;
                }
            } else {
                output.forEach(place => {
                    if ((place[0] === element) && !place.includes(exp[0])) {
                        place.push(exp[0]);
                    }
                });
            }
        });
    });

    return output;
}


console.log(
    test(
        [  
            ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],  
            ["Mawson", "South Pole", "New Hebrides"],  
            ["Hillary", "Everest", "South Pole"], 
            ["Hillary", "Everest", "South Pole"],  
            ["Hillary", "Everest", "South Pole"], 
        ]
    )
)


module.exports = function (explorers) {  
    let places = [];
    let output = [];
    let outputIndex = 0;

    explorers.forEach(exp => {
        exp.forEach((element, index) => {
            if (!places.includes(element)) {
                if (index > 0) {
                    places.push(element);

                    if (!output[outputIndex]) {
                        output[outputIndex]= [];
                    }
                    output[outputIndex].push(element);
                    
                    if (!output[outputIndex].includes(element[0])) {
                        output[outputIndex].push(exp[0]);
                    }
                    
                    outputIndex++;
                }
            } else {
                output.forEach(place => {
                    if ((place[0] === element) && !place.includes(exp[0])) {
                        place.push(exp[0]);
                    }
                });
            }
        });
    });

    return output;
}