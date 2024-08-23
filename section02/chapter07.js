// 6가지의 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1,2,3]
const newLength = arr1.push(4,5);
// console.log(arr1);
// console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 그 요소를 반환
let arr2 = [1,2,3];
const poppedItem = arr2.pop();

// console.log(poppedItem);
// console.log(arr2);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거 하고 그 요소를 반환
let arr3 = [1,2,3];
const shiftedItem = arr3.shift();

// console.log(shiftedItem);
// console.log(arr3);

// 4. unshift
// 배열의 맨 앞의 새로운 요소를 추가하는 메서드, 그리고 길이를 반환
let arr4 = [1,2,3];
const newLength2 = arr4.unshift(0);
// console.log(arr4);
// console.log(newLength2);

// 5. slice
// 배열의 특정 범위를 잘라내서 새로운 배열은 반환, 원본 배열은 바뀌지 않음
let arr5 = [1,2,3,4,5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-3);

console.log(sliced3);

// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환한다.
let arr6 = [1,2];
let arr7 = [3,4];
let concatArr = arr6.concat(arr7);
console.log(concatArr);

