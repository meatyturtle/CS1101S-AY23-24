 function closest_two_power(x) {
     return math_pow(2, math_floor(math_log2(x)));
 }
 
 function min_tiles(L, W) {
     if (L === 0 || W === 0) {
         return 0;
     } else if (L === 1 && W === 1) {
         return 1;
     } else {
         const A = closest_two_power(W); //equals 4
         return 1 + min_tiles(A, W - A) + min_tiles(W, L - A);
         
     }
 }
 
 min_tiles(6, 5);
closest_two_power(1);

function bubblesort_list(L) {
    const len = length(L);
    for (let i = len - 1; i >= 1; i = i - 1) {
        let p = L;
        for (let j = 0; j < i; j = j + 1) {
            if (list_ref(L, j) > list_ref(L, j + 1)) {
                set_head(p, list_ref(L, j + 1));
            }
        }
    }
}
const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL; // should show [1, [2, [3, [4, [5, null]]]]]

function reorder1(A, T) {
    const N = array_length(A);
    const B = [];
    for (let i = 0; i < N; i = i + 1) {
        B[T[i]] = A[i];
    }
    for (let i = 0; i < N; i = i + 1) {
        A[i] = B[i];
    }
    return A;
}
    
const A = [78, 23, 56, 12, 99];
const T = [ 3, 1, 4, 0, 2];
reorder1(A, T);

function fun(n) {
    if (n <= 1) {
        return n;
    } else {
        let xx = fun(n - 1);
        let yy = fun(n - 2);
        return xx + yy;
    }
}
fun(3);
