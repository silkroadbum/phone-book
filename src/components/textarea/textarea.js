import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateList } from '../../store/data/dataSlice';

function Textarea() {
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);
  const textAreaRef = useRef(null);

  const onClickGetData = () => {
    try {
      textAreaRef.current.value = JSON.stringify(data);
      setIsDisabled(false);
    } catch (error) {
      alert('Не удалось получить данные!');
      console.error(error);
    }
  };

  const onClickSendData = () => {
    if (textAreaRef.current.value) {
      try {
        const newData = JSON.parse(textAreaRef.current.value);
        dispatch(updateList(newData));
        textAreaRef.current.value = '';
        setIsDisabled(true);
      } catch (err) {
        alert('Данные введены не в формате JSON');
        console.error(err);
      }
    }
  };

  const checkTextArea = ({ target }) => {
    if (target.value) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <div className="textarea">
      <div className="textarea__left-block">
        <button className="textarea__btn" onClick={onClickGetData}>
          Получить данные
        </button>
        <button className="textarea__btn" onClick={onClickSendData} disabled={isDisabled}>
          Загрузить данные
        </button>
      </div>
      <div className="textarea__right-block">
        <textarea
          onInput={checkTextArea}
          className="textarea__text-field"
          name="json"
          rows="20"
          ref={textAreaRef}></textarea>
      </div>
    </div>
  );
}

export default Textarea;
