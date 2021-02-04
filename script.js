

var testArr = [-1,5,22,3,-15,565,-161];
function greaterThanY(arr, y) {
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] > y) {
            console.log(arr[i]);
        }
    }
}

greaterThanY(testArr,10);

//---------------------------------------------------------

testArr = [1,5,6,156,1,2,8,9]
function getMinMaxAvg(arr) {
    var min = Infinity, max = null, sum = 0, avg = 0, counter = 0;
    for (var i = 0; i <= arr.length-1; i++) {
        counter++
        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    avg = sum / counter;

    console.log(`Max = ${max} | Min = ${min} | Average = ${avg}`);
}

getMinMaxAvg(testArr);

//---------------------------------------------------------

testArr = [1,5,-6,-156,1,-2,-8,9];
function newArrNoNeg(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
            newArr.push[arr[i]];
        }
        else{
            newArr.push(arr[i]);
        }
    }
    return arr;
}

console.log(newArrNoNeg(testArr));

//---------------------------------------------------------

testArr = [20,30,40,50,60,70];
function removeIndex(arr, index1, index2) {
    arr.splice(index1, index2-1)
    console.log(arr);
}

removeIndex(testArr, 2, 4);

//---------------------------------------------------------

