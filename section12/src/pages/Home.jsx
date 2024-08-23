import { useState, useContext } from "react";
import {DiaryStateContext} from "../App"
import Header from  "../components/Header"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"

const getMonthlyData = () => {

}

const Home = () => {

    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivoDate] = useState(new Date());
    const onIncreaseMonth = () => {
        setPivoDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }
    const onDecreaseMonth = () => {
        setPivoDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() -1))

    }




    return (
        <div>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월 `}
            leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
            rightChild={<Button onClick={onIncreaseMonth} text={">"}/>}
            
            />
            <DiaryList />
        </div>
    )
}



export default Home;