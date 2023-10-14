const seq = [10, 5, 8];

seq[2]; //each element in the array can be assigned, just like a variable

array_length(seq);
seq[10] = 99;
array_length(seq);

const things = [123, "cat", "orange"];
things;
array_length(things);
things[2];
things[2] = "apple";
things[4] = 456;
array_length(things); //time complexity = O(1)
things; //all elements in between unassigned elements will be undefined
//undefined is still a value 

let my_array = []; //creates an empty array. can assign other values (variable)
array_length(my_array);
my_array[5] = 100;
array_length(my_array);
my_array; //length of new array is 6

let table = [[1, 2, 3, 4],
             [5, 6, 7, 8],
             [9, 10, 11 ]]; //two dimensional array
array_length(table);
table[1][2]; //first index is outemost array
//for n-dimensional array, need n indices to access the element\
array_length(table[0]);
array_length(table[2]);

function array_1_to_n(n) { //returns array that contains elements 1 thru n
    const a = []; //create array of length n
    function iter(i) { //go through each array position and assign value
        if (i < n) {
            a[i] = i + 1;
            iter(i+1); //assign the next element in the array
                      //if swap these 2 statements, ?
        } //iter terminates when i = n
    }
    iter(0); //iterative process, no accumulated operations
    return a;
}
array_1_to_n(3);

function map_array(f, arr) { //destructive map function 
    const len = array_length(arr);
    function iter(i) {
        if (i < len) {
            arr[i] = f(arr[i]);
            iter(i + 1);
        }
    }
    iter(0);
}
const sequence = [3, 1, 5];
map_array(x => 2 * x, sequence);
sequence;

//factorial using while loop
function factorial_w(n) {
    let acc = 1; //acc means accumulator
    let k = 1; //k is a counter
    while (k <= n) {
        acc = acc * k; //new value assigned to accumulator
        k = k + 1;
    }
    return acc; //returns value when loop terminates 
}

//factorial using for loop
function factorial_f(n) {
    let acc = 1;
    for (let k = 1; k <= n; k = k + 1) {
        acc = acc * k; //update value of accumulator
    }
    return acc;
}

//list length using for loop
function list_length_loop(xs) {
    let count = 0;
    for (let p = xs; !is_null(p); p = tail(p)) { //p is the element
        count = count + 1;
    }
    return count;
}
    
//break terminates the curent execution of the loop, terminates the entire loop
for (let i = 1; i < 5; i = i + 1) {
    display(stringify(i) + "here"); //in each iteration, i increases by 1
    if (i === 2) {
        break;
    }
    display(stringify(i) + "there");
}

display("OK");

for (let i = 1; i < 5; i = i + 1) {
    display(stringify(i) + "here"); //in each iteration, i increases by 1
    if (i === 2) {
        continue; //skips over the "2 there" result
    }
    display(stringify(i) + "there"); 
}

display("OK");  



function swap(arr, i, j) { //gives swap access to the array
        let temp = arr[i];
        arr[i] = arr[j]; //replaces original value of x with y
        arr[j] = temp;
}

function reverse_array(arr) { //reverses the input array
    const len = array_length(arr);
    const half_len = math_floor(len / 2);
    for (let i = 0; i < half_len; i = i + 1) { //need to do len/2 number of swaps
        swap(arr, i, len - 1 - i); //len - 1 - i is the position of the last element in the array
    }
}
const A = [4, 5, 6, 7, 8, 9, 10];   
reverse_array(A);
A;

function zero_matrix(rows, cols) {
    const M = [];
    for (let r = 0; r < rows; r = r + 1) {
        M[r] = [];
        for (let c = 0; c < cols; c = c + 1) {
            M[r][c] = 0; 
        }
    }
    return M;
}

const mat3x4 = zero_matrix(3, 4);
mat3x4;


