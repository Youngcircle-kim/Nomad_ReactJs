const log = a => console.log(a);

const products = [
    { name : '반팔티', price : 15000},
    { name : '긴팔티', price : 20000},
    { name : '핸드폰케이스', price : 15000},
    { name : '후드티', price : 30000},
    { name : '바지', price : 25000}
]

// map

// 일반적인 경우
// let names = [];
// for (const p of products){
//     names.push(p.name);
// }
// log(names);
//
// let prices = [];
// for (const p of products){
//     prices.push(p.price);
// }
// log(prices);

// map 활용
// map은 다형성 높은 generator 함수 결과들도 가능하다.
const map = (f, iter)=>{
    let res = [];
    for (const a of iter) {
        res.push(f(a));
    }
    return res;
}

log(map(p=>p.name, products));
log(map(p=>p.price, products));

function *gen(){
    yield 2;
    yield 4;
    yield 6;
}

log(map(a=>a *a, gen()));

let m = new Map();
m.set('a', 10);
m.set('b', 20);

const it = m[Symbol.iterator]();
log(it.next());
log(it.next());
log(it.next());

console.clear();

// filter

const filter = (f, iter) =>{
    let res = [];
    for (const a of iter){
        if(f(a)){
            res.push(a);
        }
    }
    return res;
}

log(filter(p=> p.price<20000, products));
log(filter(p=> p.price>20000, products));

log(filter(a=>a%2, function *(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}()))
// mild form
//
// let under20000 = [];
// for (const p of products){
//     if (p.price < 20000) {
//         under20000.push(p);
//     }
// }
// log(under20000);
//
// let over20000 = [];
// for (const p of products){
//     if (p.price > 20000) {
//         over20000.push(p);
//     }
// }
// log(over20000);