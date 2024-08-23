// const moduleData = require("./math");
// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));

// CJM: const {add, sub} = require("./math");
// ESM
// import{add, sub} from "./math.js";

// export default로 내보내는 건 중괄호를 쓰면 안된다. 그리고 이름도 자기 마음대로 설정가능
// import mul from "./math.js";

// 합치는 것도 가능
import mul, {add, sub} from "./math.js";

// 라이브러리는 경로 말고 라이브러리명을 입력한다.
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(mul(3,4));

// console.log(moduleData);

// npm i, npm install : node.modules와 package-lock.json 파일이 사라져도 이 명령어를 누르면 package.json의 정보를 바탕으로 다시 설치한다.