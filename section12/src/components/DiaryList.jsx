import './DiaryList.css';
import Button from './Button';
import DiaryItem from './DiaryItem';

// 테스트
const DiaryList = () => {
    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select>
                    <option value={'latest'}>최신순</option>
                    <option value={'ordest'}>오래된 순</option>
                </select>
                <Button text={'새 일기 쓰기'} type={'POSITIVE'} />
            </div>
            <div className="list_wrapper">
                <DiaryItem />
            </div>
        </div>
    );
};

export default DiaryList;
