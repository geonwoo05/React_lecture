// 1. promise
// 비동기 작업을 진행 할 콜백함수를 매개변수로 넣어준다.
// const promise = new Promise((resolve, reject)=>{
//     // 비동기 작업 실행하는 함수: excecutor
//     setTimeout(()=>{
//         const num = null;
//         if(typeof num === 'number'){
//             resolve(num + 10);
//         }else{
//             reject("num이 숫자가 아닙니다.")
//         }
//         // console.log("hi");
//         // //resolve("hi"); // 매개변수를 넣으면 result에 값이 채워진다.
//         // reject("실패한 이유")
//     }, 2000)
// });

// setTimeout(() => {
//     console.log(promise);
// }, 3000)

// then 메서드
// -> 그 후에
// 비동기가 성공했을 때만 실행 그리고 promise를 반환
// promise. then((value) => {
//     console.log(value);
// })

// catch 메서드
// 비동기가 실패했을 때의 then메서드 느낌
// promise.catch((error) => {
//     console.log(error);
// })

// promise의 chainning
// promise. then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// })

function add10(num){
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof num === 'number'){
                resolve(num + 10);
            }else{
                reject("num이 숫자가 아닙니다.")
            }

        }, 2000)
    });

    return promise;
}

const p = add10(0)
p.then((result) => {
    console.log(result);
    const newP = add10(result);
    return newP;
}).then((result) => {
    console.log(result);
    return add10(result);
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}) // 중간에 에러가 나도 catch로 넘어감


