import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateList } from '../../store/data/dataSlice';

function Textarea() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  const onClickGetData = () => {
    try {
      setText(JSON.stringify(data));
      setIsDisabled(false);
    } catch (error) {
      alert('Не удалось получить данные!');
      console.error(error);
    }
  };

  const onClickSendData = () => {
    if (text.length > 0) {
      try {
        const newData = JSON.parse(text);
        dispatch(updateList(newData));
        setText('');
        setIsDisabled(true);
      } catch (err) {
        alert('Данные введены не в формате JSON');
        console.error(err);
      }
    }
  };

  const onChangeTextArea = ({ target }) => {
    setText(target.value);
    if (target.value.length > 0) {
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
          onChange={onChangeTextArea}
          className="textarea__text-field"
          name="json"
          rows="20"
          value={text}></textarea>
      </div>
    </div>
  );
}

export default Textarea;
