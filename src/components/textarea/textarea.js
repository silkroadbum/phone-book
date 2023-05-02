import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateList } from '../../store/data/dataSlice';

function Textarea() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  const textAreaRef = useRef(null);

  const onClickGetData = () => {
    textAreaRef.current.value = JSON.stringify(data);
  };

  const onClickSendData = () => {
    const newData = JSON.parse(textAreaRef.current.value);
    dispatch(updateList(newData));
    textAreaRef.current.value = '';
  };

  return (
    <div className="textarea">
      <div className="textarea__left-block">
        <button className="textarea__btn" onClick={onClickGetData}>
          Получить данные
        </button>
        <button className="textarea__btn" onClick={onClickSendData}>
          Загрузить данные
        </button>
      </div>
      <div className="textarea__right-block">
        <textarea
          className="textarea__text-field"
          name="json"
          rows="20"
          ref={textAreaRef}></textarea>
      </div>
    </div>
  );
}

export default Textarea;
