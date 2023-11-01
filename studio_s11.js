function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}

const A = pair(1, () => scale_stream(2, A));
//returns a stream which is a sequence where each element is double of the previous element
//powers of 2

function mul_streams(a,b) {
    return pair(head(a) * head(b),
                () => mul_streams(stream_tail(a), stream_tail(b)));
}
const B = pair(1, () => mul_streams(B, integers));
//returns a stream where the elements are product of each respective element in original stream
//n factorial

function add_streams(s1, s2) {
    return is_null(s1)
        ? s2
        : is_null(s2)
        ? s1
        : pair(head(s1) + head(s2),
                () => add_streams(stream_tail(s1),
                                  stream_tail(s2)));
}

function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}
const add_series = add_streams;
const scale_series = scale_stream;

function negate_series(s) {
    return scale_series(-1, s);
}

function subtract_series(s1, s2) {
    return add_series(s1, negate_series(s2));
}

function coeffs_to_series(list_of_coeffs) {
    const zeros = pair(0, () => zeros);
    function iter(list) {
        return is_null(list)
            ? zeros
            : pair(head(list),
                    () => iter(tail(list)));
    }
    return iter(list_of_coeffs);
}

function fun_to_series(fun) {
    return stream_map(fun, non_neg_integers);
}

//in class studio 
function stream_pairs(s) {
    return is_null(s)
        ? null
        : stream_append(
            stream_map(
                sn => pair(head(s), sn),
                stream_tail(s)),
            stream_pairs(stream_tail(s)));
}

const ints = stream(1, 2, 3, 4, 5); 
stream_pairs(ints); . 
//returns a stream where every 2 elements are paired together. 5C2

//pairs 2 integers together. returns a stream of all possible combis  

const s2 = stream_pairs(integers_from(1));
//returns an infinite loop because stream pairs is not lazy 

//stream append pickle is lazy. will not have infinite loop 
//wrapped the infinite recursive call in a nullary function. will only be 
//activated when we reach empty list 

function stream_append_pickle(xs, ys) {
    return is_null(xs)
        ? ys()
        : pair(head(xs),
                () => stream_append_pickle(stream_tail(xs),
                                            ys));
}

function stream_pairs2(s) {
    return is_null(s)
        ? null
        : stream_append_pickle(
                            stream_map(
                                sn => pair(head(s), sn),
                                stream_tail(s)),
                            () => stream_pairs2(stream_tail(s)));
}
const s3 = stream_pairs2(ints);
eval_stream(s3, 10);
//lazy evaluation 
//first few elements: [1, 2], [1, 3], [1, 4]...


//STREAM ZIP. very important idea in computing 
function interleave_stream_append(s1, s2) {
    return is_null(s1)
           ? s2
           : pair(head(s1), () => interleave_stream_append(s2), stream_tail(s1)); 
           
           
}

function stream_pairs3(s) {
    return is_null(s) || is_null(stream_tail(s))
           ? null 
           : pair(pair(head(s), head(stream_tail(s))), )
}






























