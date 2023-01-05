const log = a=> console.log(a);

const addMaker = a => b => a+b;
//function addMaker(a){
//      function inner(b){
//          return a+b
//      }
// }

//add10은 클로저
const add10 = addMaker(10);
const times = (f, n)=>{
    let i = -1;
    while(++i < n){
        f(i)
    }
}
log(add10(4));
log(addMaker(10)(4));
times(a=>log(a+10),3)
