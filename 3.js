const log = a => console.log(a);

//Array,Set,Map 순회
log("Arr ----------------");
const arr = [1,2,3];
for (const a of arr) log(a);

log("Set ----------------");
const set = new Set([1,2,3]);
for (const a of set) log(a);

log("Map ----------------");
const map = new Map([['a',1],['b',2],['c',3]]);
// for (const a of map.keys()) log(a); 키만 나옴
// for (const a of map.values()) log(a); 밸류만 나옴
// for (const a of map.entries()) log(a); 전체 다 나옴 그냥 map 했을 때와 같음
for (const a of map) log(a);

// 이터러블/이터레이터 프로토콜
// -이터러블 : 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
// -이터레이터: { value, done } 객체를 리턴하는 next() 를 가진 값
// -이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약

// 사용자 정의 이터러블을 통해 알아보기
const iterable = {
    [Symbol.iterator](){
        let i = 3;
        return{
            next(){
                return i===0 ? {done: true} : {value: i--, done: false}
            },
            [Symbol.iterator](){return this;}
        }
    }
};
let iterator = iterable[Symbol.iterator]();
 log(iterator.next());
// log(iterator.next());
// log(iterator.next());
// log(iterator.next());
for (const a of iterator) log(a);

//전개 연산자, 이것도 이터러블/이터레이터 프로토콜을 따른다.
console.clear();
const a = [1,2];
console.log([...a, 4,5,...arr,...map])
