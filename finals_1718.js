//question B
function similar(tn1, tn2) {
    if (is_null(tn1) && is_null(tn2)) {
        return true;
    } else if (length(tn1) !== length(tn2)) {
        return false;
    } else if (is_number(head(tn1))) {
        if (math_abs(head(tn1) - head(tn2)) <= 1) {
            return similar(tail(tn1), tail(tn2));
        } else {
            return false;
        }
    } else { //if the head is a list
        if (similar(head(tn1), head(tn2))) {
            return similar(tail(tn1), tail(tn2));
        } else {
            return false;
        }
    }

} 

display(similar(list(4, list(5,6)),
list(4, null, list(5,6)))); // false (not same structure)
display(similar(list(4, null, list(5,6)),
list(5, null, list(4,7)))); // true
display(similar(list(4, list(5,6)),
list(5, list(3,7)))); // false (too big difference) bro what

function differences(tn1, tn2) {
    if (is_null(tn1) && is_null(tn2)) {
        return 0;
    } else if (is_number(head(tn1))) {
        if (head(tn1) - head(tn2) !== 0) {
            return differences(tail(tn1), tail(tn2)) + 1;
        } else {
            return differences(tail(tn1), tail(tn2));
        } 
    } else { //head is a list
        return differences(head(tn1), head(tn2)) 
                + 
                differences(tail(tn1), tail(tn2));
    }
}

display(differences(list(4, null, list(4,6), 8),
list(5, null, list(4,7), 8))); // returns 2
display(differences(list(4,5,6,7),
list(4,5,6,7))); // returns 0

function increment(tn) {
    function map_tree(f, tree) {
        return map(sub_tree => ! is_list(sub_tree)
                                ? f(sub_tree)
                                : map_tree(f, sub_tree),
                                tree
                                );
    }
    return map_tree(x => x + 1, tn); //dont break map_tree abstraction
}

let unsorted = [5, 1, 10, 2, 1, 5, 7, 3];
let max = 12;

function array_with_zeros(n) {
    let result = [];
    for (let i = 0; i < n; i = i + 1) {
        result[i] = 0;
    }
    return result;
}

function make_histogram(arr, max) { //how to iterate max + 1 times iap
    const histy = array_with_zeros(max + 1);
    for (let i = 0; i < array_length(arr); i = i + 1) {
        histy[arr[i]] = histy[arr[i]] + 1;
    }
    return histy;
}
make_histogram(unsorted, 12); //returns [0, 2, 1, 1, 0, 2, 0, 1, 0, 0, 1, 0, 0]

function enter_copies(arr, n, v, start) {
    for (let i = start; i < array_length(arr) - n + 1; i = i + 1) {
        arr[i] = v;
    }
    return arr;
}
let some_array = [1, 1, 1, 1, 1, 1, 1, 1, 1];
enter_copies(some_array, 4, 8, 2);
//returns [1, 1, 8, 8, 8, 8, 1, 1, 1]

function generate_sorted(histogram) {
    let result = [];
    let counter = 0;
    for (let i = 0; i < array_length(histogram); i = i + 1) {
        for (let j = 0; j < histogram[i]; j = j + 1) {
            result[counter] = i;
            counter = counter + 1;
        }
    }
    return result;
}
generate_sorted([0, 2, 1, 1, 0, 2, 0, 1, 0, 0, 1, 0, 0]);
//returns [1, 1, 2, 3, 5, 5, 7, 10]

function tree_to_arraytree(xs) {
    let result = [];
    let c = 0;
    let next = xs;
    while (!is_null(next)) {
        if (is_list(head(next))) {
            result[c] = tree_to_arraytree(head(next));
        } else {
            result[c] = head(next);
        }
        next = tail(next);
        c = c + 1;   
    }
    return result;
}

display(tree_to_arraytree(list()));
// returns []
display(tree_to_arraytree(list(10, 20, 30)));
// returns [10, 20, 30]
display(tree_to_arraytree(list(list(10, 20, 30), list(30, 20, 10))));
// returns [[10, 20, 30], [30, 20, 10]]

function arraytree_to_tree(a) {
    let result = null;
    for (let i = 0; i < array_length(a); i = i + 1) {
        if (is_array(a[i])) {
            result = pair(arraytree_to_tree(a[i]), result);
        } else {
            result = pair(a[i], result);            
        }
    }
    return reverse(result);
}
display(arraytree_to_tree([]));
// returns null
display_list(arraytree_to_tree([10, 20, 30]));
// returns a value equal to the result of list(10, 20, 30)
display_list(arraytree_to_tree([[10, 20, 30], [30, 20, 10]]));
// returns a value equal to the result of
// list(list(10, 20, 30), list(30, 20, 10)));

function permutations(s) {
    return is_null(s)
        ? list(null)
        : accumulate(append, null,
                    map(x => map(p => pair(x, p),
                                permutations(remove(x, s))),
                        s));
}

function array_permutations(a) {
    return tree_to_arraytree(permutations(arraytree_to_tree(a)));
}
array_permutations([10, 20, 30]);
