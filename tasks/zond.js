// function zond(zond) {
//     let xIndex = 0;
//     let yIndex = 0;

//     let correctZond = zond.map(coords => {
//         if (coords[0] > 0) {
//             if (xIndex & 1) {
//                 coords[0] = coords[0] * (-1);
//             }
//             xIndex++;
//         }

//         if (coords[1] > 0) {
//             if (yIndex & 1) {
//                 coords[1] = coords[1] * (-1);
//             }
//             yIndex++;
//         }

//         return coords;
//     });

//     return (yIndex & 1 || xIndex & 1) ? null : correctZond;
// }

// console.log(
//     zond(
//         [  
//             [1, 0],  
//             [0, 1],  
//             [1, 1],
//             [0, 0]
//         ]
//     )
// );


module.exports = function (zond) {  
    let xIndex = 0;
    let yIndex = 0;

    let correctZond = zond.map(coords => {
        if (coords[0] > 0) {
            if (xIndex & 1) {
                coords[0] = coords[0] * (-1);
            }
            xIndex++;
        }

        if (coords[1] > 0) {
            if (yIndex & 1) {
                coords[1] = coords[1] * (-1);
            }
            yIndex++;
        }

        return coords;
    });

    return (yIndex & 1 || xIndex & 1) ? null : correctZond; 
};