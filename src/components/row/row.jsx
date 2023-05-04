import { useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import { updateItem } from '../../store/data/dataSlice';
import Buttons from '../buttons/buttons';
import { countries } from '../../const';
import { checkNameField, checkMobilePhoneFiled, checkEmailFiled } from '../../utils';

function Row({ item, index, onClickEdit, editRowIndex }) {
  const [rowData, setRowData] = useState({ ...item });
  const [selectedCountry, setSelectedCountry] = useState({
    value: item.country,
    label: item.country,
  });
  const [nameFieldError, setNameFieldError] = useState(false);
  const [mobileFieldError, setMobileFieldError] = useState(false);
  const [emailFieldError, setEmailFieldError] = useState(false);
  const dispatch = useDispatch();

  const onChangeInput = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      checkNameField(value, setNameFieldError);
    } else if (name === 'mobilePhone') {
      checkMobilePhoneFiled(value, setMobileFieldError);
    } else if (name === 'email') {
      checkEmailFiled(value, setEmailFieldError);
    }
    setRowData({ ...rowData, [name]: value });
  };

  const handleSave = () => {
    dispatch(updateItem({ index, ...rowData }));
    onClickEdit(-1);
  };

  const onChangeCountry = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setRowData({ ...rowData, country: selectedOption.value });
  };

  const isEdit = editRowIndex === index;

  return (
    <div className="table__row">
      <div className="table__cell">
        {isEdit ? (
          <input
            className={`table__input ${nameFieldError ? 'error' : ''}`}
            onChange={onChangeInput}
            name="name"
            type="text"
            value={rowData.name}
            placeholder="Обязательное поле"
            required
          />
        ) : (
          item.name
        )}
      </div>
      <div className="table__cell">
        {isEdit ? (
          <input
            className="table__input table__input--date"
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
            className={`table__input ${mobileFieldError ? 'error' : ''}`}
            onChange={onChangeInput}
            name="mobilePhone"
            type="tel"
            placeholder="Формат +7ХХХХХХХХХХ"
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
            className={`table__input ${emailFieldError ? 'error' : ''}`}
            onChange={onChangeInput}
            name="email"
            type="email"
            value={rowData.email}
            placeholder="Формат test@test.ru"
          />
        ) : (
          item.email || '-'
        )}
      </div>
      <div className="table__cell table__cell--with-buttons">
        {isEdit ? (
          <Select
            value={selectedCountry}
            onChange={onChangeCountry}
            options={countries}
            placeholder="Выберите страну"
            isSearchable={true}
            styles={{
              control: (provided) => ({
                ...provided,
                width: '150px',
                fontSize: '14px',
              }),
            }}
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
