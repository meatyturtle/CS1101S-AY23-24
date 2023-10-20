function make_optimized_search(A) {
// merge sort the list first 
    let B = [];
    for (let k = 0; k < array_length(A), k = k + 1) {
        B[k] = A[k];
    }
    merge_sort(B);
    return x => binary search; //O(n log n) 
}


function fib(n) {
    const A = [0, 1];
    for (let k = 2; k <= n; k = k + 1) {
        A[k] = A[k - 1] + A[k - 2];
    }
    return A[n];
}
fib(6);

function fib_mk2(n) {
    if (n <= 1) {
        return n;
    } else {
        let a = 0;
        let b = 1; 
        for (let k = 2; k <= n; k = k + 1) {
            let temp = a + b;
            a = b;
            b = temp;
        }
        return b; //b is the latest computed fib number
    }
}

fib_mk2(6);
