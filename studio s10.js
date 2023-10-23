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
