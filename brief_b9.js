function cond(E1, E2, E3) {
    if (E1) {return E2;} else { return E3; }
}

//functions with no arguments - delay its evaluation 
cond(E1, () => E2, () => E3);
// delay eval of E2 and E3 until enough information to decide which is needed
// desribe an activity without actually doing an activity

function f(x) {
    return () => x + 1; //not finished. f returns a function stores computation
                        //used to add 99 to 1. just a description 
}

f(99); //returns () => x + 1

function sum_primes(a, b) {
    return accumulate((x, y) => x + y, 0, filter(is_prime), enum_list(a, b));
}

//inefficient to generate a whole list then select elements 
//using streams saves us a lot of computation!! 
//streams are delayed lists
    //head has data item, but tail is a function to generate next element 

const s1 = null; //empty stream
const s2 = pair(1, () => null); //stream with element 1
const s3 = pair(1,
                () => pair(2, 
                            () => pair(3,
                                        () => null))); //there is only one pair
//streams can be used to represent infinite sequences
function ones_stream() {
    return pair(1, ones_stream); //no infinite recursion. ones stream is not
                                 // a recursive call
}

const ones = ones_stream();
head(ones); //returns 1
head(tail(ones)()); //returns second element in stream
//stream doesnt remember the previous results 

function stream_tail(stream) {
    return tail(stream)(); 
}

function enum_stream(low, hi) {
    return low>hi
           ? null 
           : pair(low,
                  () => enum_stream(low + 1), hi); 
}
//time complexity - O(1) its just returning a pair 

function stream_ref(s, n) {
    return n === 0
           ? head(s)
           : stream_ref(stream_tail(s), n - 1);
} //will only generate elements up until the element its looking for 
//time complexity - theta(n) 

function stream_map(f, s) {
    return is_null(s) 
           ? null 
           : pair(f(head(s)),
                  () => stream_map(f, stream_tail(s)));
} //recursive call not immediate

function stream_filter(p, s) {
    return is_null(s) 
           ? null 
           : p(head(s))
                ? pair(head(s),
                    () => stream_filter(p, stream_tail(s)))
                : stream_filter(p, stream_tail(s));
}

function is_divisible(x, y) {
    return x % y === 0;
}

const no_fours = stream_filter(x => !is_divisible(x, 4), integers_from(1));

function fibgen(a, b) {
    return pair(a, () => fibgen(b, a + b));
}

function more(a, b) {
    return (a > b) 
           ? more(1, 1 + b) 
           : pair(a, () => more(a + 1, b));
}
