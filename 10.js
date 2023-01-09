// 일반 range와 Lazy range 차이
// 일반 range에 map이나 filter를 씌우면, range 리스트를 다 만들고, 함수를 적용시킴
// but, Lazy range는 yield로 인해 하나 생성하면 map 받고 filter를 받음.
// 즉, range의 크기가 작다면 전자가 빠름, range가 크다면 후자가 더 빠름

// map, filter 계열 함수들이 가지는 결합 법칙

// 사용하는 데이터가 무엇이든지
// 사용하는 보조 함수가 순수 함수라면 무엇이든지
// 아래와 같이 결합한다면 둘 다 결과가 같다.

// [[mapping, mapping],[filtering, filtering],[mapping, mapping]]
// =
// [[mapping, filtering, mapping],[mapping, filtering, mapping]]
