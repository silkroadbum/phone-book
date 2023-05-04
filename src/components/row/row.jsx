import { useState } from 'react';
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
  // const [day, month, year] = birthday.split('.');
  // const formatedDate = new Date(year, month, day);

  const onChangeInput = ({ target }) => {
    const { name, value } = target;
    setRowData({ ...rowData, [name]: value });
  };

  return editRowIndex === index ? (
    <tr className="table__row">
      <td className="table__cell">
        <input onChange={onChangeInput} name="name" type="text" value={rowData.name} required />
      </td>
      <td className="table__cell">
        <input
          onChange={onChangeInput}
          name="birthday"
          type="date"
          value={dayjs(birthday).format('YYYY-MM-DD')}
        />
      </td>
      <td className="table__cell">
        <input onChange={onChangeInput} name="mobilePhone" type="tel" value={rowData.mobilePhone} />
      </td>
      <td className="table__cell">
        <input onChange={onChangeInput} name="cityPhone" type="text" value={rowData.cityPhone} />
      </td>
      <td className="table__cell">
        <input onChange={onChangeInput} name="workPhone" type="text" value={rowData.workPhone} />
      </td>
      <td className="table__cell">
        <input onChange={onChangeInput} name="workPhone" type="text" value={rowData.email} />
      </td>
      <td className="table__cell table__cell--with-buttons">
        <input onChange={onChangeInput} name="country" type="text" value={rowData.country} />
        {<Buttons onClickEdit={onClickEdit} index={index} editRowIndex={editRowIndex} />}
      </td>
    </tr>
  ) : (
    <tr className="table__row">
      <td className="table__cell">{name}</td>
      <td className="table__cell">{birthday ? dayjs(birthday).format('DD.MM.YYYY') : '-'}</td>
      <td className="table__cell">{mobilePhone || '-'}</td>
      <td className="table__cell">{cityPhone || '-'}</td>
      <td className="table__cell">{workPhone || '-'}</td>
      <td className="table__cell">{email || '-'}</td>
      <td className="table__cell table__cell--with-buttons">
        {country || '-'}
        {<Buttons onClickEdit={onClickEdit} index={index} editRowIndex={editRowIndex} />}
      </td>
    </tr>
  );
}

export default Row;
