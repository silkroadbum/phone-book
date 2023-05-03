import { useState, useRef, useEffect } from 'react';
import { sorts } from '../../const';

function Sorting() {
  const [choosenSort, setChoosenSort] = useState({ id: 0, name: 'По имени(возрастание)' });
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsVisibleModal(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [sortRef]);

  const showModal = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  const chooseSort = (sort) => {
    setChoosenSort(sort);
    setIsVisibleModal(false);
  };

  return (
    <div ref={sortRef} className="sort">
      <span className="sort__title">Сортировать по: </span>
      <span onClick={showModal} className="sort__name">
        {choosenSort.name}
      </span>
      {isVisibleModal ? (
        <ul className="sort__list">
          {sorts.map((item) => (
            <li onClick={() => chooseSort(item)} className="sort__item">
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
}

export default Sorting;
