// function returnFalse(){
//     console.log("False 함수");
//     return false;
// }
// function returnTrue(){
//     console.log("True 함수");
//     return true;
// }

//console.log(returnFalse() && returnTrue()); // returnTrue함수가 호출이 되지 않았다. 뒤의 함수는 진행하지않았다.(단락평가)
// returnTrue() && returnFalse()이면 둘 다 호출 

// function returnFalse(){
//     console.log("False 함수");
//     return undefined;
// }
// function returnTrue(){
//     console.log("True 함수");
//     return 10;
// }

// console.log(returnTrue() || returnFalse()); // Truthy한 값만 호출
// console.log(returnFalse() && returnTrue());


// 단락 평가 활용사례
function printName(person){
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

// Truthy한 값 || truthy한 값이면 첫번째, Truthy한 값 && Truthy한 값이면 두번째값이 적용

printName();
printName({name : "이정환"});


