import dayjs from 'dayjs';

//функция сортировки списка по имени по возрастанию
export const sortByNameDesc = (a, b) => {
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  } else {
    return 0;
  }
};

//функция сортировки списка по имени по убыванию
export const sortByNameAsc = (a, b) => {
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return -1;
  } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
};

//функция сортировки списка по дате рождения по возрастанию
export const sortByBirthdayDesc = (a, b) => {
  const [dayA, monthA, yearA] = dayjs(a.birthday).format('DD.MM.YYYY').split('.');
  const [dayB, monthB, yearB] = dayjs(b.birthday).format('DD.MM.YYYY').split('.');
  const dateA = new Date(yearA, monthA, dayA);
  const dateB = new Date(yearB, monthB, dayB);
  if (dateA < dateB) {
    return 1;
  } else if (dateA > dateB) {
    return -1;
  } else {
    return 0;
  }
};

//функция сортировки списка по дате рождения по убыванию
export const sortByBirthdayAsc = (a, b) => {
  const [dayA, monthA, yearA] = dayjs(a.birthday).format('DD.MM.YYYY').split('.');
  const [dayB, monthB, yearB] = dayjs(b.birthday).format('DD.MM.YYYY').split('.');
  const dateA = new Date(yearA, monthA, dayA);
  const dateB = new Date(yearB, monthB, dayB);
  if (dateA < dateB) {
    return -1;
  } else if (dateA > dateB) {
    return 1;
  } else {
    return 0;
  }
};
