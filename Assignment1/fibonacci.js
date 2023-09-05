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