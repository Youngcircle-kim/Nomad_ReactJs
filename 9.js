
const reduce = (f,acc,iter)=>{
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for(const a of iter){
        acc = f(acc, a);
    }
    return acc;
};
//range
const add = (a,b)=> a+b;
const range = a => {
    let lst = [];
    for (let i = 0; i < a; i++) {
        lst.push(i);
    }
    return lst;
};

console.log(range(5));
//[0, 1, 2, 3, 4]

console.log(range(2));
//[0, 1]
var list = range(4);
console.log(reduce(add, list));

console.clear()

//느긋한 L.range

const L = {};

L.range = function *(a) {
    for (let i = 0; i < a; i++) {
        yield i;
    }
};

