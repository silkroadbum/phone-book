import { useState } from 'react';
import { useSelector } from 'react-redux';

import Row from '../row/row';
import { headers } from '../../const';

function Table() {
  const { data } = useSelector((state) => state.data);
  const [editRowIndex, setEditRowIndex] = useState(-1);

  const renderRows = () =>
    data.map((item, index) => (
      <tr key={index} className="table__row">
        <Row {...item} index={index} onClickEdit={setEditRowIndex} editRowIndex={editRowIndex} />
      </tr>
    ));

  const renderHeaders = () =>
    headers.map((header, index) => (
      <th key={index} className="table__header">
        {header}
      </th>
    ));

  return (
    <>
      <h1 className="title">Phone book</h1>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr className="row">{renderHeaders()}</tr>
          </thead>
          <tbody className="table__body">{renderRows()}</tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
