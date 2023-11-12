//question 1H
function table_to_snake_list(table, height, width) {
    let snake = null;
    for (let row = 0; row < height; row = row + 1) {
        for (let col = 0; col < width; col = col + 1) {
            if (row % 2 === 0) {
                snake = pair(table[row][col], snake);
            } else {
                snake = pair(table[row][width-col-1], snake);
            }
        }
    }
    return reverse(snake);
}

let table = [[ 1, 2, 3],
            [ 4, 5, 6],
            [ 7, 8, 9],
            [10, 11, 12]];
table_to_snake_list(table, 4, 3); 
//returns a result structurally equal to list(1,2, 3, 6, 5, 4, 7, 8, 9, 12, 11, 10).

//question 2A
function mergeA(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs;
    } else {
        return head(xs) < head(ys) 
              ? pair(head(xs), mergeA(tail(xs), ys))
              : pair(head(ys), mergeA(xs, tail(ys)));
    }
}
mergeA(list(1, 3, 7, 9) ,list(2, 3, 5, 6, 11));

//question 2B
function mergeB(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs;
    } else if (head(xs) < head(ys)) {
        set_tail(xs, mergeB(tail(xs), ys));
        return xs;
    } else {
        set_tail(ys, mergeB(xs, tail(ys)));
        return ys; //need to return something lmao
    }
}
mergeB(list(1, 3, 7, 9) ,list(2, 3, 5, 6, 11));

//question 2C
function mergeC(xs, xs_len, ys, ys_len) {
    let result = [];
    let result_len = xs_len + ys_len;
    for (let k = 0; k < result_len; k = k + 1) {
        for (let i = 0; i < xs_len; i = i + 1) { //iterate thru xs
            for (let j = 0; j < ys_len; j = j + 1) { //iterate thru ys
                if (xs[i] < ys[j]) {
                    result[i] = xs[i];
                }
            }
        }        
    }
    return result;
}

//question 3A
function are_equal_sets(set1, set2) {
    if (length(set1) !== length(set2)) {
        return false;
    } else {
        return accumulate(
                    (x1, y1) => accumulate(
                                    (x2, y2) => x1 === x2 || y2, 
                                    false, 
                                    set2) 
                                && y1, 
                    true, 
                    set1);
    }
}

are_equal_sets(list(6, 3, 5, 8), list(8, 3, 5, 6));

//question 3B
function powerset(set) {
    if (is_null(set)) {
        return list(null);
    } else {
        const next = powerset(tail(set));
        return append(
                    map(x => pair(head(set), x), next), 
                    next);
    }
}

powerset(list(3, 5, 6));
