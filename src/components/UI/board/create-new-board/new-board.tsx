import { useState, useEffect, useContext} from 'react';
import { Button, ButtonSize, ButtonVariant } from '../../button/Button';
import { BoardType, ColumnItem } from '../../../../../api/data.types';
import { BoardContext } from './board-context';
import Board from '../board';


const BackdropLayer = `z-0 fixed top-0 left-0 right-0 bottom-0 overflow-auto justify-center flex before:content-[''] before:fixed before:top-0 before:right-0 before:bottom-0 before:left-0 before:overflow-auto before:opacity-60 before:bg-black `;
const AddBoardText = `dark:text-white text-black font-bold text-xl my-0`;
const formStyling = `flex py-4 flex-col w-full text-medGray`;
const inputStyling =
  'focus:outline-none focus:border-mainPurple dark:text-white dark:bg-darkGrey border rounded-md px-4 py-2 mb-0 text-black';
const NewBoardStyles = `dark:text-white p-8 box-border mx-[80px] my-auto flex flex-col rounded-md w-[430px] z-10 max-h-[400px] mx-auto bg-white dark:bg-darkGrey text-black dark:text-white`;
const flexWrapper = 'flex';
const labelStyling = `dark:text-white font-bold text-sm mb-2`;
const columnContainer = 'max-h-20 overflow-scroll';

type NewBoardModalProps = {
  toggleBoardModal: () => void;
};
export default function NewBoardModal(props: NewBoardModalProps) {
  const { toggleBoardModal } = props;
  const {boards} = useContext(BoardContext);
  const {addNewBoard} = useContext(BoardContext);

  const [columnList, setColumnList] = useState<ColumnItem[]>([{ name: '', tasks: [] }]);

  const handleColumnAdd = () => {
    setColumnList([
      ...columnList,
      { name: '', tasks: [{ title: '', description: '', status: '', subtasks: [] }] }
    ]);
  };

  const handleColumnDelete = (index: number) => {
    const list = [...columnList];
    list.splice(index, 1);
    setColumnList(list);
  };

  const handleColumnChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const list = [...columnList];
    list[index].name = value;
    setColumnList(list);
    console.log(columnList);
  };

  const [newBoardName, setNewBoardName] = useState('');

  const handleNewBoardNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBoardName(e.target.value);
  };


  const handleBoardAdd = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newBoard: BoardType = {
      name: newBoardName,
      columns: columnList
    };

    addNewBoard(newBoard);

    setTimeout(() => {
      toggleBoardModal();
    }, 0);
  };

  useEffect(() => {
    console.log('Boards: ' + JSON.stringify(boards));
  }, [boards]);

  return (
    <div onClick={toggleBoardModal} className={BackdropLayer}>
      <div onClick={(e) => e.stopPropagation()} className={NewBoardStyles}>
        <div className={AddBoardText}>Add New Board</div>
        <form onSubmit={handleBoardAdd} className={formStyling}>
          <label className={labelStyling}>Board Name</label>
          <input
            className={`${inputStyling} mb-6`}
            type="text"
            onChange={handleNewBoardNameChange}
            name="name"
            placeholder="e.g. web design"
          />

          <label className={labelStyling}>Board Columns</label>
          <div className={columnContainer}>
            {columnList.map((column, index) => (
              <div key={index} className={flexWrapper}>
                <input
                  className={`${inputStyling} w-full mb-2`}
                  value={column.name}
                  onChange={(e) => handleColumnChange(e, index)}
                  type="text"
                  name="name"
                />
                <Button onClick={() => handleColumnDelete(index)} variant={ButtonVariant.empty}>
                  <img src="/icons/icon-cross.svg" />
                </Button>
              </div>
            ))}
          </div>
          <Button
            onClick={handleColumnAdd}
            className="mb-5"
            size={ButtonSize.small}
            variant={ButtonVariant.secondary}>
            + Add New Column
          </Button>

          <Button
            type="submit"
            size={ButtonSize.small}
            variant={ButtonVariant.primary}
            className="mb-0">
            Create New Board
          </Button>
        </form>
      </div>
    </div>
  );
}
