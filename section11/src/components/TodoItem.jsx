import './TodoItem.css'
import { memo, useContext } from 'react';
import { TodoDispatchContext } from '../App';

const TodoItem = ({id,isDone, content, date})=> {
    const{onUpdate, onDelete} = useContext(TodoDispatchContext);

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return (
    <div className="TodoItem">
        <input onChange={onChangeCheckbox} readOnly checked={isDone} type="checkbox" />
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleString()}</div>
        <button onClick={onClickDeleteButton}>삭제</button>
    </div>
    )
}

// 고차 컴포넌트 (HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//     // 변환값에 따라 Props가 바뀌었는 지 안바뀌었는 지 판단.
//     // T -> Props가 바뀌지 않음 -> 리랜더링x
//     // F -> Props가 바뀜 -> 리랜더링

//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;
//     return true;
// });

export default memo(TodoItem)