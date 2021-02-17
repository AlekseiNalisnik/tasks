function test (inputData, inputDictionary) {
    sortByCoordinates(inputData);

    const resultMessage = [];
    inputData.forEach(data => {
        if(data.text.includes(' ')) {
            data.text.split(' ').forEach(word => resultMessage.push(word))
        } else {
            resultMessage.push(data.text);
        }
    });

    inputDictionary = inputDictionary.map(str => str.toLowerCase().trim());
    const isMessageUncorrect = resultMessage.filter(msg => !inputDictionary.includes(msg.toLowerCase().trim())).length;

    if (isMessageUncorrect) {
        return "Unreadable message";
    } else {
        return resultMessage.join(' ');
    }
}

function sortByCoordinates(arr) {
    arr = arr.sort(
        (data1, data2) => data1.geometry[0] - data2.geometry[0]
    );
}




const data = [  
    {  
        geometry: [10, 20],  
        text: 'James'  
    },  
    {  
        geometry: [20, 40],  
        text: 'test test'  
    },  
    {  
        geometry: [5, 40],  
        text: 'Bond'  
    }  
];  
const dictionary = ['James', 'Bond', 'TEST'];

console.log(
    test(data, dictionary)
);