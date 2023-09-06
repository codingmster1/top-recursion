function mergeSort(arr) {
    if (arr.length <= 1) {
       return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
 }
  
 //function to merge the left and right elements
 function merge(left, right) {
    const result = [];
     
    while (left.length && right.length) {
       if (left[0] < right[0]) {
          result.push(left.shift());
       } else {
          result.push(right.shift());
       }
    }
     
    return [...result, ...left, ...right];
 }
 
 const arr=[];
 console.log(mergeSort([10, 7, 8, 9, 1, 5])); // prints [1, 5, 7, 8, 9, 10]
 console.log(mergeSort([45, 35, 40, 43, 30, 25])); // prints [25, 30, 35, 40, 43, 45]
 console.log(mergeSort(arr));
  