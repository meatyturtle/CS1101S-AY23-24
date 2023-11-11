function last_member(x, xs) {
    function find_last_member(ys, current_last) {
        let next = member(x, ys);
        return is_null(next) 
               ? current_last
               : find_last_member(tail(next), next);
    }
    return find_last_member(xs, null);
}
//returns the last postfix sublist whose head is identical to x 

function is_subset(S, T) {
    if (is_null(S)) {
        return true;
    } else if (is_null(T)) {
        return false;
    } else if (head(S) < head(T)) {
        return false;
    } else if (head(S) === head(T)) {
        return is_subset(tail(S), tail(T));
    } else {
        return is_subset(S, tail(T));
    }
}
last_member(3, list(1, 3, 5, 3, 7, 8, 3, 2, 4));

// Write a function, mutable_append(xs, ys), which is similar to the built-in 
// function append, but in the result of mutable_append, every pair in the result 
// list is an existing pair of the input lists (i.e. no new pair is created). 
// The given lists xs and ys can be destroyed in the process.

function mutable_append(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs; //dont need this case
    } else {
        set_tail(xs, mutable_append(tail(xs), ys));
        return xs;
    }
}
mutable_append(list(1, 2, 3, 4), list(5, 6, 7, 8));

function transform_tree(t) { //reverse the tree
    return reverse(map(x => is_list(x)
                            ? transform_tree(x)
                            : x, //what does this do..
                    t));
}

function display_tree(tree) {
    if (is_null(tree)) {
    } else if (is_list(head(tree))) {
        display_tree(head(tree));
        display_tree(tail(tree));
    } else {
        display(head(tree));
        display_tree(tail(tree));
    }
}

let tree1 = list(1, list(2, 3), 3, 4, list(5, 6, 7));
let tree2 = transform_tree(tree1);
display_tree(tree1); // displays a sequence of numbers
display_tree(tree2); // displays a reverse of the above
