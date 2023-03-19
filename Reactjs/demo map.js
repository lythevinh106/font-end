



function map2(arr, callback) {

    const newArr = [...arr];
    const arrREsult = [];
    newArr.forEach((value, index) => {
        arrREsult.push(callback(value))
    })


    return arrREsult;

}

const newArr = map2([1, 9, 2, 3, 4], (value) => {
    return value * 2;
})


console.log(newArr);

