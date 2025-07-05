let arr1 = [1, 2, 3];
arr1[1] = 10;

let arr2 = ["apple", "banana", "cherry"];
arr2.push("orange");

let arr3 = [4, 7, 2, 9];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
    sum += arr3[i];
}
console.log(sum);

let arr4 = [5, 8, 12, 3, 7];
for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}

let arr5 = ["hello", "world", "javascript", "array", "example"];
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i].length > 5) {
        console.log(arr5[i]);
    }
}

let arr6 = [3, 7, 1, 9, 12, 15, 8, 2, 6, 10];
let max = arr6[0];
for (let i = 1; i < arr6.length; i++) {
    if (arr6[i] > max) {
        max = arr6[i];
    }
}
console.log(max);

let arr7 = [4, 7, 12, 9, 2, 15, 8, 3, 6, 10];
for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] % 2 === 0) {
        console.log(arr7[i]);
    }
}