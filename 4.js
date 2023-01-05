const log = a => console.log(a);

// 제네레이터/이터레이터
// -제너레이터: 이터레이터이자 이터러블을 생성하는 함수
// 어떤 값이든 순회할 수 있다는 것을 의미한다.
function *gen(){
    yield 1;
    yield 2;
    yield 3;
    return 100;
}
let iter = gen();
log(iter[Symbol.iterator]() === iter); //generator는 Well Formed Iterator 이다.
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());

//순회할 때 return 값은 반환 X, 또한 return 값을 나오면 done은 ture돼 순회가 끊김
for (const a of gen()) log(a);

console.clear()

//odds
function *infinity(i=0){
    while(true){
        yield i++;
    }
}
function *limit(l, iter){
    for(const a of iter){
        yield a;
        if (a === l) {
            return;
        }
    }
}
function *odds(l){
    for (const a of limit(l, infinity(1))){
        if (a%2) yield a;
    }
}
let iter2 = odds(10);
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());
log(iter2.next());

for (const a of odds(10)){
    log(a);
}

console.clear();

// for of, 전개 연산자, 구조 분해, 나머지 연산자

log(...odds(10));

log([...odds(10),...odds(20)]);
