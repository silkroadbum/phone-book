import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/data/dataSlice';

function Form() {
  const [isVisible, setIsVisible] = useState(false);
  const [isValidForm, setIsValid] = useState(false);
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
    const newPerson = {};
    formData.forEach((value, key) => {
      newPerson[key] = value;
    });
    dispatch(addItem(newPerson));
    setIsVisible(false);
  };

  const onChangeNameField = ({ target }) => {
    if (target.value.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
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
            Имя:
            <input
              onChange={onChangeNameField}
              className="form-add__input"
              type="text"
              name="name"
              id="name"
            />
          </label>
          <label className="form-add__label" htmlFor="birthday">
            Дата рождения:
            <input className="form-add__input" type="date" name="birthday" id="birthday" />
          </label>
          <label className="form-add__label" htmlFor="mobilePhone">
            Мобильный номер:
            <input className="form-add__input" type="text" name="mobilePhone" id="mobilePhone" />
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
            <input className="form-add__input" type="email" name="email" id="email" />
          </label>
          <label className="form-add__label" htmlFor="country">
            Страна проживания:
            <input className="form-add__input" type="text" name="country" id="country" />
          </label>
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
