import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateList, sortingList } from '../../store/data/dataSlice';
import csvtojson from 'csvtojson';

function Textarea() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { data, sortData } = useSelector((state) => state.data);

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
        dispatch(sortingList(sortData.id));
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

  const handleFileUpload = async ({ target }) => {
    const file = target.files[0];
    const reader = new FileReader();
    if ((file && file.type === 'text/csv') || (file && file.type === 'application/json')) {
      reader.addEventListener('load', async () => {
        let data;
        if (file.type === 'text/csv') {
          const json = await csvtojson().fromString(reader.result);
          setText(JSON.stringify(json));
        } else {
          data = reader.result;
          setText(data);
        }
        setIsDisabled(false);
      });
      reader.readAsText(file);
    } else {
      alert('Загрузите файл формата JSON или СVS');
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
        <div className="textarea__file-block">
          <label className="textarea__input-label" htmlFor="file">
            Выберете файл JSON/CVS:
          </label>
          <input
            onChange={handleFileUpload}
            type="file"
            className="textarea__input"
            name="file"
            id="file"
          />
        </div>
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
