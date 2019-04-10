// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]



let arr = [1, 2, 4, 591, 393, 2, 5, 10, 2, 1, 1, 1, 20, 20];

// orderList returns an array from smallest to largest number, including repeats

function orderList(arr) {
    let result = arr;

    for (i = 0; i < result.length; i++) {
        let j = i + 1;
        for (j = i + 1; j < result.length; j++) {
            if (result[i] > result[j]) {
                [result[i], result[j]] = [result[j], result[i]];
            }
        }
    }
    console.log(`Ordered array is: [${result}]`);
    return result;
}

let orderedList = orderList(arr);


// chunkArrays returns an array of arrays (containing repeats) and numbers

function chunkArrays(arr) {
    let newArray = [];
    let newSubArray = [];

    for (i = 0; i < arr.length; i++) {
        // newSubArray.push(arr[i]);
        if (arr[i] === arr[i + 1]) {
            newSubArray.push(arr[i]);
            console.log(`Found a match arr[${i}]: ${arr[i]}, newSubArray is now: ${newSubArray}`);
        } else {
            newSubArray.push(arr[i]);
            if (newSubArray.length <= 1) {
                newArray.push(arr[i]);
            } else {
                newArray.push(newSubArray);
            }
            newSubArray = [];
        }
    }

    return newArray;
}

let final = chunkArrays(orderedList);

console.log(final);



// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

let s = arr;

function findSum(arr, target) {
    for (i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === target) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(findSum(s, 596));


// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

// convert HEX to rgb

function convertColor(color) {
    /* Check for # infront of the value, if it's there, strip it */

    if (color.substring(0, 1) == '#') {
        color = color.substring(1);
    }

    var rgbColor = {};

    /* Grab each pair (channel) of hex values and parse them to ints using hexadecimal decoding */
    rgbColor.rChannel = parseInt(color.substring(0, 2), 16);
    rgbColor.gChannel = parseInt(color.substring(2, 4), 16);
    rgbColor.bChannel = parseInt(color.substring(4), 16);

    return rgbColor;
}

console.log(convertColor('#FFF000'));

// convert rgb to HEX

var rgbToHex = function(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

var fullColorHex = function(r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    return red + green + blue;
};

console.log(fullColorHex(12, 30, 50));