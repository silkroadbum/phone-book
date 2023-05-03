import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../store/data/dataSlice';
import { sorts } from '../../const';

function Sorting() {
  const { sortData } = useSelector((state) => state.data);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const dispatch = useDispatch();
  const sortRef = useRef(null);
  console.log(sortData);

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
    dispatch(setSort(sort));
    setIsVisibleModal(false);
  };

  return (
    <div ref={sortRef} className="sort">
      <span className="sort__title">Сортировать по: </span>
      <span onClick={showModal} className="sort__name">
        {sortData.name}
      </span>
      {isVisibleModal ? (
        <ul className="sort__list">
          {sorts.map((item) => (
            <li key={item.id} onClick={() => chooseSort(item)} className="sort__item">
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
