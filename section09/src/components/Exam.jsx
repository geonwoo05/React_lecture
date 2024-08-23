import { useReducer } from "react"

const Exam =  () => {
    // reducer: 변환기
    // -> 상태를 실제로 변환시키는 변환기 역할
    function reducer(state, action) {
        // if(action.type === "INCREASE"){
        //     return state + action.data;
        // }else if(action.type === "DECREASE"){
        //     return state - action.data;
        // }
        switch(action.type){
            case "INCREASE": return state + action.data;
            case "DECREASE": return state - action.data;
            default: return state;
        }

    }

    //dispatch: 발송하다. -> 상태 변화가 있어야한다는 사실을 알리는 함수
    // 인수로 reducer를 갖고 또 인수를 추가하면 그것은 state의 초기값.
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        // 인수: 상태가 어떻게 변화되길 원하는 지
        // 객체 안에 값을 증가시켜 달라는 요청 -> 인수로 요청을 담고 있는 객체를 '액션 객체'라고한다. 
        dispatch({
            type: "INCREASE",
            data: 1
        })

    }

    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1
        })
    }

    return <div>
        <h1>{state}</h1>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
    </div>
}

export default Exam