import { useState } from 'react';
import { updateItem } from '../../store/data/dataSlice';
import { useDispatch } from 'react-redux';
import Buttons from '../buttons/buttons';
import dayjs from 'dayjs';

function Row({
  name,
  birthday,
  mobilePhone,
  cityPhone,
  workPhone,
  email,
  country,
  index,
  onClickEdit,
  editRowIndex,
}) {
  const [rowData, setRowData] = useState({
    name,
    birthday,
    mobilePhone,
    cityPhone,
    workPhone,
    email,
    country,
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

  return editRowIndex === index ? (
    <div className="table__row">
      <div className="table__cell table__cell--name">
        <input
          className="table__input"
          onChange={onChangeInput}
          name="name"
          type="text"
          value={rowData.name}
          required
        />
      </div>
      <div className="table__cell">
        <input
          className="table__input"
          onChange={onChangeInput}
          name="birthday"
          type="date"
          value={dayjs(rowData.birthday).format('YYYY-MM-DD')}
        />
      </div>
      <div className="table__cell">
        <input
          className="table__input"
          onChange={onChangeInput}
          name="mobilePhone"
          type="tel"
          value={rowData.mobilePhone}
        />
      </div>
      <div className="table__cell">
        <input
          className="table__input"
          onChange={onChangeInput}
          name="cityPhone"
          type="text"
          value={rowData.cityPhone}
        />
      </div>
      <div className="table__cell">
        <input
          className="table__input"
          onChange={onChangeInput}
          name="workPhone"
          type="text"
          value={rowData.workPhone}
        />
      </div>
      <div className="table__cell">
        <input
          className="table__input"
          onChange={onChangeInput}
          name="workPhone"
          type="text"
          value={rowData.email}
        />
      </div>
      <div className="table__cell table__cell--with-buttons">
        <input
          className="table__input"
          onChange={onChangeInput}
          name="country"
          type="text"
          value={rowData.country}
        />
        {
          <Buttons
            onClickEdit={onClickEdit}
            index={index}
            editRowIndex={editRowIndex}
            onSave={handleSave}
          />
        }
      </div>
    </div>
  ) : (
    <div className="table__row">
      <div className="table__cell">{name}</div>
      <div className="table__cell">{birthday ? dayjs(birthday).format('DD.MM.YYYY') : '-'}</div>
      <div className="table__cell">{mobilePhone || '-'}</div>
      <div className="table__cell">{cityPhone || '-'}</div>
      <div className="table__cell">{workPhone || '-'}</div>
      <div className="table__cell">{email || '-'}</div>
      <div className="table__cell table__cell--with-buttons">
        {country || '-'}
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
