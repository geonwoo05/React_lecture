import {useEffect} from 'react';

const Even = () =>{
    useEffect(() => {
        // 콜백함수가 반환하는 함수 : 정리함수 또는 클린업
        return () => {
            console.log("unmount");
        }
    },[])
    return <div>짝수입니다</div>
}

export default Even;