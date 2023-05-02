import { useDispatch } from 'react-redux';
import { removeItem } from '../../store/data/dataSlice';

function Buttons({ index }) {
  const dispatch = useDispatch();
  const onClickRemove = (id) => {
    console.log(id);
    dispatch(removeItem(id));
  };

  return (
    <span className="buttons-block">
      <button className="button" title="Редактировать запись">
        <img src="/img/edit.png" alt="Редактировать" width={22} height={22} />
      </button>
      <button onClick={() => onClickRemove(index)} className="button" title="Удалить запись">
        <img src="/img/close.svg" alt="Удалить" />
      </button>
    </span>
  );
}

export default Buttons;
