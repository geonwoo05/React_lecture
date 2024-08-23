import './App.css'
import Viewer from "./components/Viewer"
import Controller from "./components/Controller"
import {useState, useEffect, useRef} from "react";
import Even from './components/Even';


function App() {

  const[count, setCount] = useState(0);
  const[input, setInput] = useState("");
  const isMount = useRef(false);

  // useEffect(() => {
  //    console.log(`count:${count} / input:${PictureInPictureWindow}`);

  // }, [count, input]) //의존성 배열(Dependancy array, deps)

  // 1. 마운트 : 탄생
  // deps에 빈 배열 넣기
  useEffect(() => {
    console.log("mount");

  }, [])
  // 2. 업데이트 : 변화, 리랜더링
  // deps 생략 -> 업데이트 될 때마다 계속 실행됨.
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update")

  })

  // 3. 언마운트 : 죽음



  const onClickButton = (value) => {
      setCount(count + value);
      //console.log(count);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
