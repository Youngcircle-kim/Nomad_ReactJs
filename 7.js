const log = a => console.log(a);

const products = [
    { name : '반팔티', price : 15000},
    { name : '긴팔티', price : 20000},
    { name : '핸드폰케이스', price : 15000},
    { name : '후드티', price : 30000},
    { name : '바지', price : 25000}
];
const curry = f =>(a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f,iter)=>{
    let res =[];
    for (const a of iter){
        res.push(f(a));
    }
    return res;
})

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
log(
    reduce(
        add,
        map(
            p=> p.price,
            filter(
                p=> p.price < 20000, products)
        )
    )
);
console.clear();

//go, pipe
const go = (...args) => reduce((a, f)=>f(a), args);

const pipe =(...fs)=> (a) => go(a, ...fs);

const f = pipe(
    a => a+1,
    a => a+10,
    a => a+100
);
log(f(0));

go(
    products,
    products => filter(p=>p.price <20000, products),
    products => map(p=> p.price, products),
    prices =>   reduce(add, prices),
    log
);

const mult = curry((a,b)=> a*b);
log(mult(1)(2))

go(
    products,
    filter(p=>p.price <20000),
    map(p=> p.price),
    reduce(add),
    log
);