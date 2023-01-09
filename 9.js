const curry = f => (a,..._) =>
    _.length? f(a, ..._) : (..._) => f(a, ..._);

const reduce = curry((f,acc,iter)=>{
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for(const a of iter){
        acc = f(acc, a);
    }
    return acc;
});

const go = (...args) => reduce((a, f)=>f(a), args);
//range
const add = (a,b)=> a+b;
const range = a => {
    let lst = [];
    for (let i = 0; i < a; i++) {
        lst.push(i);
    }
    return lst;
};

// console.log(range(5));
// [0, 1, 2, 3, 4]
//
// console.log(range(2));
// [0, 1]
// var list = range(4);
// console.log(reduce(add, list));


//느긋한 L.range

const L = {};

L.range = function *(a) {
    for (let i = 0; i < a; i++) {
        yield i;
    }
};

//test
function test(name, time, f){
    console.time(name);
    while (time--) {
    f();
    }
    console.timeEnd(name);
}

// test("range", 10, ()=>reduce(add, range(1000000)));
// test("L.range", 10, ()=>reduce(add, L.range(1000000)));
console.clear();

//take
//지연성과 같이 사용했을 때, 효율이 극대화 된다.
const take = curry((l, iter)=>{
    let res = [];
    for (const a of iter){
        res.push(a);
        if (res.length === l){
            return res;
        }
    }
    return res;
});

go(
    L.range(10000),
    take(5),
    reduce(add),
    console.log
);

// 이터러블 중심 프로그래밍에서의 지연 평가(Lazy Evaluation)
// -제때 계산법
// -느긋한 계산법
// -제너레이터/이터레이터 프로토콜을 기반으로 구현

console.clear()
//L.map

L.map = function *(f,iter) {
    for (const a of iter)
        yield f(a);
};

let it = L.map(a => a+10, [1,2,3]);

// 이터러블이라 이리 표현
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

//L.filter
L.filter = function *(f, iter){
  for (const a of iter){
      if (f(a)) {
          yield a;
      }
  }
};

let it2 = L.filter(a => a%2, [1,2,3,4]);

// 이것 또한 이터러블이기에 이리 표현
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());
// console.log(it2.next());