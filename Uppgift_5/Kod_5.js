const array1= [1, 4, 7, 10, 15];
const isLargerNumber = (element) => element > 8;
const found = array1.find((element) => element > 8);
console.log("Value:", found, "Index:", array1.findIndex(isLargerNumber));
     