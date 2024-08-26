import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';
import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import usePageTitle from '../hooks/usePageTitle';

const getMonthlyData = (pivotData, data) => {
    const beginTime = new Date(pivotData.getFullYear(), pivotData.getMonth(), 1, 0, 0, 0).getTime();

    const endTime = new Date(pivotData.getFullYear(), pivotData.getMonth() + 1, 0, 23, 59, 59).getTime();

    return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime);
};

const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivoDate] = useState(new Date());
    usePageTitle("감정 일기장")

    const monthlyData = getMonthlyData(pivotDate, data);

    const onIncreaseMonth = () => {
        setPivoDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
    };
    const onDecreaseMonth = () => {
        setPivoDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
    };

    return (
        <div>
            <Header
                title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월 `}
                leftChild={<Button onClick={onDecreaseMonth} text={'<'} />}
                rightChild={<Button onClick={onIncreaseMonth} text={'>'} />}
            />
            <DiaryList data={monthlyData} />
        </div>
    );
};

export default Home;
