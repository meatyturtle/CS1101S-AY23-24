//lecture 10 - streams ii
//please end my suffering


//replace function. creates a new stream by replacing in a given stream a
//particular value by another value

function replace(s, a, b) {
    return is_null(s) 
           ? null 
           : pair((head(s) === a) 
                ? b 
                : head(s), () => replace(stream_tail(s), a, b));
}

function listtoinfinitestream(xs) {
    function helper(ys) {
        return is_null(ys) 
               ? helper(xs)
               : pair(head(ys), () => helper(tail(ys)));
    }
    return is_null(xs) ? null : helper(xs);
}

const s = listtoinfinitestream(list(1, 2, 3));
eval_stream(s, 10); 

//repeating sequence
const rep123 = pair(1, 
                    () => pair(2, 
                                () => pair(3,
                                            () => rep123)));
eval_stream(rep123, 10);

//takes two streams and returns a stream containing element wise sums
function add_streams(s1, s2) {
    return is_null(s1)
           ? s2
           : is_null(s2)
           ? s1
           : pair(head(s1) + head(s2),
                 () => add_streams(stream_tail(s1), stream_tail(s2)));
} 

const fibs = pair(0,
                  () => pair(1,
                             () => add_streams(stream_tail(fibs),
                                               fibs)));
                                               
function memo_fun(fun) {
    let already_run = false; //input function is assumed to have not been evaluated
    let result = undefined; //store computed memoized result
     
     function mfun() { //check whether fun has been applied
         if (!already_run) {
             result = fun();
             already_run = true;
             return result;
         } else {
             return result;
         }
     }
     return mfun;
}

function ms(m, s) {
    display(m);
    return s;
}
const onesB = pair(1, memo_fun(() => ms("B", onesB)));
stream_ref(display("b");
                                               
function mintergersfrom(n) { //returns m integers from n + 1
    return pair(n, memo_fun(() => ms("m", )))
}                                             
      
//reflection R10                                               
function ziplistofstreams(ss) {
    return pair(head(head(ss)), 
                () => ziplistofstreams(append(tail(ss), 
                                              list(stream_tail(head(ss))))));
}                                               
                                               
function partial_sums(str) {
    return pair(head(str), 
                () => add_streams(stream_tail(str) + partial_sums(str)));
}                                               
                                               
                                              
                                               
                                               
                                               
                                               
                                               
                                               
                                               
                                               
                                               
                                               
