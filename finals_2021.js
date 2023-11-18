function accumulate_iter(f, init, xs) {
    function helper(ys, cont) {
        if (is_null(ys)) {
            return cont(init);
        } else {
            return helper(tail(ys), x => cont(f(head(ys), x)));
        }
    }
}

function identityMatrix(n) {
    let result = [];
    for (let i = 0; i < n; i = i + 1) {
        result[i] = [];
        for (let j = 0; j < n; j = j + 1) {
            if (i === j) {
                result[i][j] = 1;
            } else {
                result[i][j] = 0;
            }
        }
    }
    return result;
}
identityMatrix(3);    

function zipArray(arr1, arr2) {
    let result = [];
    for (let i = 0; i < array_length(arr1); i = i + 1) {
        result[2 * i] = arr1[i]; //odd indexes is array 1
        result[2 * i + 1] = arr2[i]; //even indexes is array 2
    }
    return result;
}
zipArray([], []); // returns []
zipArray([1, 2, 3], [10, 20, 30]); // returns [1, 10, 2, 20, 3, 30]    

function unzip_array(arr) {
    let result1 = [];
    let result2 = [];
    for (let i = 0; i < array_length(arr)/2; i = i + 1) {
        result1[i] = arr[2 * i]; //even indexes go to first result
        result2[i] = arr[2 * i + 1]; //odd indexes go to second result
    }
    return pair(result1, result2);
}
unzip_array([]); // returns [[], []]
unzip_array([1, 10, 2, 20, 3, 30]); // returns [[1, 2, 3], [10, 20, 30]]  



