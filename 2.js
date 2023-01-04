const log = a => console.log(a);

//기존 리스트 순회
const list = [1,2,3];
// for (var i = 0; i<list.length; i++){
//     log(list[i])
// }

//es6 리스트순회
for(const a of list){
    log(a);
}

//기존 문자열 순회
const str = 'abc';
// for (var i = 0; i<str.length; i++){
//     log(str[i])
// }

//es6 문자열 순회
for (const a of str){
    log(a)
}

