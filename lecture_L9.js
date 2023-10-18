//lecture L9 - searching, sorting, memoization
//linear (sequential) and binary search 

function linear_search(A, v) {
    const len = array_length(A);
    let i = 0;
    while (i < len && A[i] !== v ) { //if value at position i is not the value
        i = i + 1;
    }
    return (i < len);
}

linear_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);
//arrays are random access. any value can be retrieved in O(1) time 
//linear search has theta(n) runtime

//make sure input array is sorted ascending 
//result is O(log n) 
function binary_search(A, v) {
    function search(low, high) {
        if (low > high) {
            return false;
        } else {
            const mid = math_floor((low + high) / 2);
            return (v === A[mid]) //if this is true, return true
                                 || (v < A[mid])
                    ? search(low, mid - 1)
                    : search(mid + 1, high);
        }
    }
    return search(0, array_length(A) - 1);
}

function binary_search_loop(A, v) {
    let low = 0;
    let high = array_length(A) - 1;
    while (low <= high) {
        const mid = math_floor((low + high) / 2);
        if (v === A[mid]) {
            break; //dont need the loop anymore
        } else if (v < A[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return (low <= high);
}

function selection_sort(A) {
    const len = array_length(A);
    for (let i = 0; i < len - 1; i = i + 1) {
        let min_pos = find_min_pos(A, i, len - 1); //find the smallest element and its index
        swap(A, i, min_pos);
    }
}

// function find_min_pos(array, index, position)

function insertion_sort(A) {
    const len = array_length(A);
    for (let i = 1; i < len; i = i + 1) {
        let j = i - 1; //j is on the left of i
        while (j >= 0 && A[j] > A[j + 1]) { //element on left is larger than right
            swap(A, j, j + 1);
            j = j - 1;
        }       
    }
}

function insertion_sort2(A) {
    const len = array_length(A);
    for (let i = 0; i < len; i = i + 1) {
        const x = A[i];
        let j = i - 1;
        while (j >= 0 && A[j] > x) {
            A[j + 1] = A[j]; //shift right
            j = j + 1;
        }
        A[j + 1] = x; //must only happen once at the end of the search 
    }
}

function mfib(n) {
    const mem = []; //memory for already computed results of fib
    
    function fib(k) { //k is the same as n 
        if (mem[k] !== undefined)  {//havent put any value at that position
            return mem[k]; //just access memory
        } else { //compute fib and add result to mem
            const result = 
                k <= 1 ? k : fib(k - 1) + fib(k - 2);
            mem[k] = result; //store result in position k of mem
            return result;
        }
    }
    return fib(n);
}
//time complexity is linear - Omega(n)

//use global memory instead of local memory

function memoize(f) {
    const mem = [];
    function mf(x) {
        if (mem[x] !== undefined) {
            return mem[x];
        } else {
            const result = f(x);
            mem[x] = result;
            return result;
        }
    }
    return mf; //turn any unary function into a memoized one 
}
