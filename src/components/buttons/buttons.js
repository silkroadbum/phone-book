import { useDispatch } from 'react-redux';
import { removeItem } from '../../store/data/dataSlice';

function Buttons({ index, onClickEdit, editRowIndex, onSave, isDisabledBtn }) {
  const dispatch = useDispatch();
  const onClickRemove = (id) => {
    console.log(id);
    dispatch(removeItem(id));
  };

  return (
    <span className="buttons-block">
      {editRowIndex === index ? (
        <>
          <button
            onClick={onSave}
            className="button"
            title="Сохранить изменения"
            disabled={isDisabledBtn}>
            <img src="/img/check.png" alt="Сохранить" width={22} height={22} />
          </button>
          <button onClick={() => onClickEdit(-1)} className="button" title="Удалить запись">
            <img src="/img/close.svg" alt="Отменить" />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => onClickEdit(index)}
            className="button"
            title="Редактировать запись">
            <img src="/img/edit.png" alt="Редактировать" width={22} height={22} />
          </button>
          <button onClick={() => onClickRemove(index)} className="button" title="Удалить запись">
            <img src="/img/close.svg" alt="Удалить" />
          </button>
        </>
      )}
    </span>
  );
}

export default Buttons;
