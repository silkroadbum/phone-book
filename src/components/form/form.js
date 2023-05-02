import { useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/data/dataSlice';
import { countries } from '../../const';

function Form() {
  const [isVisible, setIsVisible] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const dispatch = useDispatch();

  const onClickAddPerson = () => {
    setIsVisible(!isVisible);
  };

  const onClickCancel = () => {
    setIsVisible(false);
  };

  const submitForm = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const formData = new FormData(form);
    let newPerson = {};
    formData.forEach((value, key) => {
      newPerson[key] = value;
    });
    newPerson = { ...newPerson, country: selectedCountry.value };
    dispatch(addItem(newPerson));
    setIsVisible(false);
    setIsValidForm(false);
  };

  const onChangeField = ({ target }) => {
    if (target.value.length > 0) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  };

  return (
    <div className="top-block">
      <button className="button--add-record" onClick={onClickAddPerson}>
        Добавить новую запись
      </button>
      {isVisible ? (
        <form onSubmit={submitForm} className="form-add" action="/" method="post">
          <label className="form-add__label" htmlFor="name">
            Имя:*
            <input
              onChange={onChangeField}
              className="form-add__input"
              type="text"
              name="name"
              id="name"
              required
            />
          </label>
          <label className="form-add__label" htmlFor="birthday">
            Дата рождения:
            <input className="form-add__input" type="date" name="birthday" id="birthday" />
          </label>
          <label className="form-add__label" htmlFor="mobilePhone">
            Мобильный номер:
            <input
              className="form-add__input"
              type="tel"
              name="mobilePhone"
              id="mobilePhone"
              pattern="^\+7\d{10}$"
              placeholder="Формат +7ХХХХХХХХХХ"
            />
          </label>
          <label className="form-add__label" htmlFor="cityPhone">
            Городской номер:
            <input className="form-add__input" type="text" name="cityPhone" id="cityPhone" />
          </label>
          <label className="form-add__label" htmlFor="workPhone">
            Рабочий номер:
            <input className="form-add__input" type="text" name="workPhone" id="workPhone" />
          </label>
          <label className="form-add__label" htmlFor="email">
            Email:
            <input
              className="form-add__input"
              type="email"
              name="email"
              id="email"
              pattern="/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/"
              placeholder="Формат test@test.ru"
            />
          </label>
          <label className="form-add__label" htmlFor="country">
            Страна проживания:
            <Select
              value={selectedCountry}
              onChange={setSelectedCountry}
              options={countries}
              placeholder="Выберите страну"
              isSearchable={true}
            />
          </label>
          <span className="form-add__text">*-обязательные поля</span>
          <div className="form-add__btn-block">
            <button className="form-add__btn" type="submit" disabled={!isValidForm}>
              Добавить
            </button>
            <button className="form-add__btn" type="button" onClick={onClickCancel}>
              Отмена
            </button>
          </div>
        </form>
      ) : (
        ''
      )}
    </div>
  );
}

export default Form;
