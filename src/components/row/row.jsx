import Buttons from '../buttons/buttons';
import dayjs from 'dayjs';

function Row({ name, birthday, mobilePhone, cityPhone, workPhone, email, country, index, isEdit }) {
  return (
    <>
      <td className="table__cell">{name}</td>
      <td className="table__cell">{birthday ? dayjs(birthday).format('DD.MM.YYYY') : '-'}</td>
      <td className="table__cell">{mobilePhone || '-'}</td>
      <td className="table__cell">{cityPhone || '-'}</td>
      <td className="table__cell">{workPhone || '-'}</td>
      <td className="table__cell">{email || '-'}</td>
      <td className="table__cell table__cell--with-buttons">
        {country || '-'}
        {<Buttons index={index} />}
      </td>
    </>
  );
}

export default Row;
