// memoized fibonacci approach 

function fibonacci(n, memo = {}){

    let arr1 = []

    function fib(num){
        if ( num <= 1 ){
            return num;
        }
        if ( num in memo ){
            return memo[num];
        }
        memo[num] = fib(num-1) + fib(num-2)
        return memo[num];
    }

    for ( let i = 0 ; i <= n ; i++){
        arr1.push(fib(i));
    }

    return arr1
}

console.log(fibonacci(5))