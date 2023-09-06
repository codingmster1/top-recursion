// iteration of fibonacci



function fib(n) {

    const result = [0, 1];
    for (var i = 2; i <= n; i++) {
      const a = result[i - 1];
      const b = result[i - 2];
      result.push(a + b);
    }
    console.log(result);
    return result[n];
  
  }
  
  console.log(fib(7)); // added 7 instead of 8 because 8 would count the zero before one and be nine instead
  // prints Array(8)
  // 0:0, 1:1, 2:1, 3:2, 4:3, 5:5, 6:8, 7:13 length: 8


  //recursion version 

  function fibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2)
 }
 
 console.log(fibonacci(7))