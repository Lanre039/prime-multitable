export default {
  handlePrimeNo: (input: string): number[] => {
    const primeNo: number[] = [];
    if (parseInt(input) < 0) {
      return primeNo;
    }

    for (let i = 2; i <= parseInt(input); i++) {
      // spread numbers let than user input and remove 0 and 1
      const checker = [...Array(i).keys()].slice(2); // (e.g 5 = [2,3,4])

      /**
       For efficiency, using Array.prototype.some(), if one element in the array passes the test 
       (i.e i % check === 0) it would return true and it won't test for other elements in the array 
       again which implies that the number is NOT a prime number. Considering when array contain large 
       number of elements to be tested (e.g 100)
       input should not be divisible by any number NOT itself, so I expect isPrime to return false 
       if the value is a prime number
       */
      const isPrime = checker.some((check) => i % check === 0); //(e.g 5%2 = false, 5%3 = false, 5%4 = false)

      // if isPrime is false, it implies that the value is a prime number, and it would enter the if statement and push it into store (i.e primeNo)
      if (!isPrime) {
        primeNo.push(i);
      }
    }
    return primeNo;
  },
};
