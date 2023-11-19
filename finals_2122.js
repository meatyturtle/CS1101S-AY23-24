function remove_elem(L, pos) {
    const elem = list_ref(L, pos);
    if (head(L) === elem) {
        return tail(L);
    } else {
        return pair(head(L), remove_elem(tail(L), pos-1));
    }
    /* alternative solution
    return pos === 0 ? tail(L) : remove_elem(tail(L), pos-1); */
}

const L = list(10, 11, 12, 13);
const R = remove_elem(L, 2);
R; // equals list(10, 11, 13)
L; // equals list(10, 11, 12, 13)

function d_remove_elem(L, pos) {
    if (pos === 0) {
        return tail(L);
    } else {
        set_tail(L, d_remove_elem(tail(L), pos-1));
        return L;
    }
}

const L = list(10, 11, 12, 13);
let R = d_remove_elem(L, 2);
display(R); // equals list(10, 11, 13)
L; // equals list(10, 11, 13)
R = d_remove_elem(L, 0);
display(R); // equals list(11, 13)
L; // equals list(10, 11, 13)

function submatrix_sum(M, min_row, min_col, max_row, max_col) {
    let result = 0;
    for (let i = min_row; i <= max_row; i = i + 1) {
        for (let j = min_col; j <= max_col; j = j + 1) {
            result = result + M[i][j];
            // display(result);
        }
    }
    return result;
}

const M =  [[1, 2, 3, 4],
            [2, 3, 4, 5],
            [3, 4, 5, 6]];
display(submatrix_sum(M, 1, 2, 1, 2)); // returns 4
display(submatrix_sum(M, 0, 0, 2, 3)); // returns 42
display(submatrix_sum(M, 1, 1, 2, 2)); // returns 16
display(submatrix_sum(M, 0, 1, 2, 2)); // returns 21

function make_sum_area_table(M) {
    const ROWS = array_length(M);
    const COLS = array_length(M[0]);
    const S = []; // the sum area table
    for (let r = 0; r < ROWS; r = r + 1) { 
        S[r] = []; 
    }
    
    function fill_SAT(r, c) {
        if (r < 0 || c < 0) {
            return 0;
        } else if (S[r][c] !== undefined) {
        return S[r][c];
        } else {
            S[r][c] = M[r][c] + fill_SAT(r - 1, c) +
                                fill_SAT(r, c - 1) - 
                                fill_SAT(r - 1, c - 1);
            return S[r][c];
        }
    }
    fill_SAT(ROWS - 1, COLS - 1);
    return S;
}

const M = [[1, 2, 3, 4],
            [2, 3, 4, 5],
            [3, 4, 5, 6]];
make_sum_area_table(M);
// returns [[1, 3, 6, 10],
        // [3, 8, 15, 24],
        // [6, 15, 27, 42]]   
    
function fast_submatrix_sum(S, min_row, min_col, max_row, max_col) {
    function get_SAT_elem(r, c) {
        return (r < 0 || c < 0) ? 0 : S[r][c];
    }
    const W = get_SAT_elem(max_row, max_col);
    const X = get_SAT_elem(min_row - 1, max_col);
    const Y = get_SAT_elem(max_row, min_col - 1);
    const Z = get_SAT_elem(min_row - 1, min_col - 1);
    return W - X - Y + Z;
}


const S = make_sum_area_table(M);
// S is now [[1, 3, 6, 10],
        // [3, 8, 15, 24],
        // [6, 15, 27, 42]]
display(fast_submatrix_sum(S, 1, 2, 1, 2)); // returns 4
display(fast_submatrix_sum(S, 0, 0, 2, 3)); // returns 42
display(fast_submatrix_sum(S, 1, 1, 2, 2)); // returns 16
display(fast_submatrix_sum(S, 0, 1, 2, 2)); // returns 21
