const log = a => console.log(a);

const products = [
    { name : '반팔티', price : 15000, quantity: 1},
    { name : '긴팔티', price : 20000, quantity: 2},
    { name : '핸드폰케이스', price : 15000, quantity: 3},
    { name : '후드티', price : 30000, quantity: 4},
    { name : '바지', price : 25000, quantity: 5}
];
const curry = f =>(a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f,iter)=>{
    let res =[];
    for (const a of iter){
        res.push(f(a));
    }
    return res;
});

const filter = curry((f, iter)=>{
    let res = [];
    for (const a of iter) {
        if (f(a)){
            res.push(a);
        }
    }
    return res;
});

const reduce = curry((f, acc, iter) =>{
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }

    for (const a of iter) {
        acc = f(acc, a);
    }
    return acc;
});

const add = (a,b)=> a+b;
const go = (...args) => reduce((a, f)=>f(a), args);
const pipe =(...fs)=> (a) => go(a, ...fs);

const sum = curry((f, iter) => go(iter,
    map(f),
    reduce(add)
));

//총 수량
const total_quantity = sum(p => p.quantity);

//총 가격
const total_price = sum(p => p.price * p.quantity);

log(total_quantity(products));

log(total_price(products));