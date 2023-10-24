function bubblesort_list(L) {
    const len = length(L);
    for (let i = len - 1; i >= 1; i = i - 1) {
        let curr = L;
        for (let j = 0; j < i; j = j + 1) {
            if (head(curr) > head(tail(curr))) {
            const temp = head(curr);
            set_head(curr, head(tail(curr)));
            set_head(tail(curr), temp);
            } else {}
            curr = tail(curr);
        }
  }
  return L;
}
const mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ?   5 :
           kinds_of_coins === 2 ?  10 :
           kinds_of_coins === 3 ?  20 :
           kinds_of_coins === 4 ?  50 :
           kinds_of_coins === 5 ? 100 : 0;
}

// The non-memoized version.
function cc(amount, kinds_of_coins) {
    return amount === 0
           ? 1
           : amount < 0 || kinds_of_coins === 0
           ? 0
           : cc(amount, kinds_of_coins - 1)
             +
             cc(amount - first_denomination(kinds_of_coins),
                kinds_of_coins);
}

// The memoized version.
// n is the amount in cents, and k is the number of denominations.
function mcc(n, k) {
    if (n === 0) {
        return 1;
    } else if (n < 0 || k === 0) {
        return 0;
    } else if (read(n, k) !== undefined) {
        return read(n, k);
    } else {
    const result =
        cc(n, k - 1) +
        cc(n - first_denomination(k), k);

    write(n, k, result);

    return result;
  }
    
}

mcc(365, 5);  // Expected result: 1730

// both time and space complexity is big O (n * k)
function rotate_matrix(M) {
    const n = array_length(M);  // M is assumed n x n

    function swap(r1, c1, r2, c2) {
        const temp = M[r1][c1];
        M[r1][c1] = M[r2][c2];
        M[r2][c2] = temp;
    }

    for (let i = 0; i < n; i = i + 1) {
        for (let j = i + 1; j < n; j = j + 1) {
            swap(i, j, j, i); //transpose   
        }
    }
    
    for (let i = 0; i < n; i = i + 1) {
        for (let j = 0; j < n / 2; j = j + 1) {
            swap(i, j, i, n - j - 1);
        }
    }
}

const M =
[[ 1,  2,  3,  4],
 [ 5,  6,  7,  8],
 [ 9, 10, 11, 12],
 [13, 14, 15, 16]];
 
rotate_matrix(M);
M;
// M should have become
// [[13,  9, 5, 1], 
//  [14, 10, 6, 2], 
//  [15, 11, 7, 3], 
//  [16, 12, 8, 4]]
