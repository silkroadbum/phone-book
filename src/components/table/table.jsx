import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { updateList } from '../../store/data/dataSlice';

import Row from '../row/row';
import { headers } from '../../const';

function Table() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  const onDragEnd = (result) => {
    const items = data.slice();
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(updateList(items));
  };

  const renderRows = () =>
    data.map((item, index) => (
      <Draggable key={item.mobilePhone} draggableId={item.mobilePhone} index={index}>
        {(provided) => (
          <tr
            className="table__row"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>
            <Row {...item} index={index} />
          </tr>
        )}
      </Draggable>
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
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="table__body">
              {(provided) => (
                <tbody className="table__body" {...provided.droppableProps} ref={provided.innerRef}>
                  {renderRows()}
                  {provided.placeholder}
                </tbody>
              )}
            </Droppable>
          </DragDropContext>
        </table>
      </div>
    </>
  );
}

export default Table;
