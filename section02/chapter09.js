// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
   {name:"이정환", hobby:"테니스"},
   {name:"김효빈", hobby:"테니스"},
   {name:"홍길동", hobby:"독서"},
]

const tennisPeople = arr1.filter((item)=>item.hobby === "테니스");
console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순화하면서 각각 콜백함수를 실행하고 그 결과값들을 모아 새로운 배열로 반환
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
});
//console.log(mapResult1);

// arr1의 name만 모아 배열 만들기
let names = arr1.map((item) => item.name)

console.log(names);

// 3. sort
// 배열을 사전 순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
//console.log(arr3);

// 콜백함수의 활용 : 숫자 오름차순으로 정렬하기
let arr4 = [10,4,5];
arr4.sort((a,b) => {
    if(a > b){
        // b가 a 앞으로 와라
        // sort 함수에서 양수를 반환하면 둘 중 더 작은 값이 앞으로 오게 된다.
        return 1;
    }else if(a < b){
        // a가 b앞으로 와라
        return -1;
    }else{
        return 0;
    }
})
//console.log(arr4);

// 4. toSorted(가장 최근에 추가된 최신 함수)
// 원본 배열을 수정하지 않고 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
//console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(" ");
console.log(joined);

