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
