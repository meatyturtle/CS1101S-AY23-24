//question 3A
let n = ...; // n is a positive integer number
for (let x = 1; x < n; x = x * 2) {
    for (let y = 0; y < x; y = y + 1) {
        display("x: " + stringify(x) + ", y: " + stringify(y));
    }
}

let n = 6; // n is a positive integer number
function outer_loop(x) { //what is the type of anything 
    function inner_loop(y) {
        if (y < x) {
            display("x: " + stringify(x) + ", y: " + stringify(y));
            return inner_loop(y + 1); 
        } else {
            //terminate            
        }
    } // inner_loop
    if (x < n) {
        inner_loop(0);
        return outer_loop(2 * x);
    } else {
        //terminate loop
    }

} // outer_loop
outer_loop(1);

//question 3B
let n = 6;
function double_loop(x, y) {
    if (x >= n) {

    } else if (y >= x) {
        return double_loop(2*x, 0);
    } else {
        display("x: " + stringify(x) + ", y: " + stringify(y));
        return double_loop(x, y + 1);
    }
}
double_loop(1, 0);

//question 4
function circular_right_shift(arr) {
    let height = array_length(arr);
    let width = array_length(arr[0]);
    
    let temp1 = arr[0][0]; //first element
    for (let row = 0; row < height; row = row + 1) {
        for (let col = 0; col < width; col = col + 1) {
            if (row === 0 && col === 0) {
                continue;
            }
            let temp2 = arr[row][col]; //current element
            arr[row][col] = temp1;
            temp1 = temp2;

        }
    }
    arr[0][0] = temp1;
}

let arr = [[ 1, 2, 3],
            [ 4, 5, 6],
            [ 7, 8, 9],
            [10, 11, 12]];
circular_right_shift(arr);
arr;

//question 5
function mutable_reverse(xs) {
    return is_null(xs) ? null :
    pair(set_head(xs, mutable_reverse(tail(xs))), head(xs));
}

let as = list(1, 2, 3, 4, 5);
let bs = mutable_reverse(as);
bs; // equal to list(5, 4, 3, 2, 1).
as; // equal to list(1).  
    









































