// Afunction that take in an array and log out as string
//create two variable name fro two arrays

const data1 = [1,3,5];
const data2 = [10, 5, 9, 15, 16];


//create a function with an arrgement of arr

const outputData = function (arr) {
    //create an empty string to convert array to string
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}C  in ${i + 1} days ... `
    }
    console.log("..." + str);
}
outputData(data2);