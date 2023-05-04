import { useState } from 'react';
import { useSelector } from 'react-redux';

import Row from '../row/row';
import { headers } from '../../const';

function Table() {
  const { data } = useSelector((state) => state.data);
  const [editRowIndex, setEditRowIndex] = useState(-1);

  const renderRows = () =>
    data.map((item, index) => (
      <Row
        key={index}
        {...item}
        index={index}
        onClickEdit={setEditRowIndex}
        editRowIndex={editRowIndex}
      />
    ));

  const renderHeaders = () =>
    headers.map((header, index) => (
      <div
        key={index}
        className={
          index === headers.length - 1
            ? 'table__header-item table__header-item--wider'
            : 'table__header-item'
        }>
        {header}
      </div>
    ));

  return (
    <>
      <h1 className="title">Phone book</h1>
      <div className="table-wrapper">
        <div className="table">
          <header className="table__header">{renderHeaders()}</header>
          <div className="table__body">{renderRows()}</div>
        </div>
      </div>
    </>
  );
}

export default Table;
