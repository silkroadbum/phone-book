import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/data/dataSlice';

function Form() {
  const [isVisible, setIsVisible] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const dispatch = useDispatch();
  const inputNameRef = useRef();
  const inputMobilePhoneRef = useRef();
  const inputEmailRef = useRef();

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
    setIsValidForm(false);
  };

  const onChangeField = () => {
    const isValidNameField = inputNameRef.current ? inputNameRef.current.value.length > 0 : false;
    const isValidMobilePhone = inputMobilePhoneRef.current
      ? inputMobilePhoneRef.current.value === '' ||
        /^\+7\d{10}$/.test(inputMobilePhoneRef.current.value)
      : false;
    const isValidEmail = inputEmailRef.current
      ? inputEmailRef.current.value === '' ||
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputEmailRef.current.value)
      : false;
    if (isValidNameField && isValidMobilePhone && isValidEmail) {
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
              ref={inputNameRef}
            />
          </label>
          <label className="form-add__label" htmlFor="birthday">
            Дата рождения:
            <input className="form-add__input" type="date" name="birthday" id="birthday" />
          </label>
          <label className="form-add__label" htmlFor="mobilePhone">
            Мобильный номер:
            <input
              onChange={onChangeField}
              className="form-add__input"
              type="tel"
              name="mobilePhone"
              id="mobilePhone"
              ref={inputMobilePhoneRef}
              pattern="+7[0-9]{10}"
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
              onChange={onChangeField}
              className="form-add__input"
              type="email"
              name="email"
              id="email"
              ref={inputEmailRef}
            />
          </label>
          <label className="form-add__label" htmlFor="country">
            Страна проживания:
            <input className="form-add__input" type="text" name="country" id="country" />
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
