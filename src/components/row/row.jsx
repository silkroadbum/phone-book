import { useState } from 'react';
import { updateItem } from '../../store/data/dataSlice';
import { useDispatch } from 'react-redux';
import Buttons from '../buttons/buttons';
import dayjs from 'dayjs';

function Row({ item, index, onClickEdit, editRowIndex }) {
  const [rowData, setRowData] = useState({
    ...item,
  });
  const dispatch = useDispatch();

  const onChangeInput = ({ target }) => {
    const { name, value } = target;
    setRowData({ ...rowData, [name]: value });
  };

  const handleSave = () => {
    dispatch(updateItem({ index, ...rowData }));
    onClickEdit(-1);
  };

  const isEdit = editRowIndex === index;

  return (
    <div className="table__row">
      <div className="table__cell">
        {isEdit ? (
          <input
            className="table__input"
            onChange={onChangeInput}
            name="name"
            type="text"
            value={rowData.name}
            required
          />
        ) : (
          item.name
        )}
      </div>
      <div className="table__cell">
        {isEdit ? (
          <input
            className="table__input"
            onChange={onChangeInput}
            name="birthday"
            type="date"
            value={dayjs(rowData.birthday).format('YYYY-MM-DD')}
          />
        ) : item.birthday ? (
          dayjs(item.birthday).format('DD.MM.YYYY')
        ) : (
          '-'
        )}
      </div>
      <div className="table__cell">
        {isEdit ? (
          <input
            className="table__input"
            onChange={onChangeInput}
            name="mobilePhone"
            type="tel"
            value={rowData.mobilePhone}
          />
        ) : (
          item.mobilePhone || '-'
        )}
      </div>
      <div className="table__cell">
        {isEdit ? (
          <input
            className="table__input"
            onChange={onChangeInput}
            name="cityPhone"
            type="text"
            value={rowData.cityPhone}
          />
        ) : (
          item.cityPhone || '-'
        )}
      </div>
      <div className="table__cell">
        {isEdit ? (
          <input
            className="table__input"
            onChange={onChangeInput}
            name="workPhone"
            type="text"
            value={rowData.workPhone}
          />
        ) : (
          item.workPhone || '-'
        )}
      </div>
      <div className="table__cell">
        {isEdit ? (
          <input
            className="table__input"
            onChange={onChangeInput}
            name="workPhone"
            type="text"
            value={rowData.email}
          />
        ) : (
          item.email || '-'
        )}
      </div>
      <div className="table__cell table__cell--with-buttons">
        {isEdit ? (
          <input
            className="table__input"
            onChange={onChangeInput}
            name="country"
            type="text"
            value={rowData.country}
          />
        ) : (
          item.country || '-'
        )}
        {
          <Buttons
            onClickEdit={onClickEdit}
            onSave={handleSave}
            index={index}
            editRowIndex={editRowIndex}
          />
        }
      </div>
    </div>
  );
}

export default Row;
