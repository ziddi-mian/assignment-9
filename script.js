// Write a JavaScript program which prints the elements of the following array.

var a = [
    [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]
];
   
console.log(a);


// js program to print all negative Element in array
 
var Array = [4, -5, 0, 2, -67, 8, 10, -34 ];

function getNegativeNumbers(array) {

    var negatives = [];
 
    for (var e = 0; e < array.length; e++) {
        if (array[e] < 0) {
            negatives.push(array[e]);
        }
    }
     
    return negatives;

}
console.log(getNegativeNumbers(Array));


//Write a js program to find sum of all array elements

var numbers = [1, 2, 3, 4];
let sum = 0;

for (let a = 0; a < numbers.length; a++) {
    sum += numbers[a];
}
console.log(sum);

//Write a js program to find maximum and minimum element in an array.

var num = [
    1, 5, 6, 2, 3
];
var m = Math.min(...num);
console.log(m)

var n = Math.max(...num)
console.log(n);



// Write a js program to count total number of even and odd elements in an array.

let getEvenNumbers = () => {
    const arr = [1, 2, 3, 4, 5, 6];
    
    for (num of arr){	
        if (num % 2 === 0) {       // 0 for even numbers and 1 for odd numbers.
            document.writeln(num);
           
        }
    }
}
getEvenNumbers();

// Write a js program to count total number of negative elements in an array.

var ar = [-1, -2, -3, 0, 0, 5, 12, 0, -10];
var zeroCount = 0,
  posCount = 0,
  negativeCount = 0;
ar.forEach((item) => {
  if (item === 0) {
    zeroCount++
  } else if (item < 0) {
    negativeCount++
  } else if (item > 0) {
    posCount++
  }
})

console.log("ZeroCount:: " + zeroCount);
console.log("PositiveCount :: " + posCount);
console.log("NegativeCount:: " + negativeCount);


//Write a js program to insert an element in an array.


function insertElement() {
    let array = [1, 2, 3, 4, 5];

   
    let index = 3;

    
    let element = 8;
  
    array.splice(index, 0, element);
    console.log(array);
}

insertElement();


// Write a js program to copy all elements from an array to another array.

var first = [1, 2, 3];
var second = [4, 5];
 
for (var i of second) {
    first.push(i);
}
 
console.log(first);


// Write a js program to delete an element from an array at specified position.

function removeItemFromArray(array, n) {
    const index = array.indexOf(n);

    
    if(index > -1) {

       
        array.splice(index, 1);
    }
    return array;
}

const result = removeItemFromArray([1, 2, 3 , 4, 5], 2);

console.log(result);

















































