import { useContext } from 'react';
import { Button, ButtonVariant } from '../../UI/button/Button';
import { BoardContext } from './create-new-board/board-context';
import Column from '../column/column';
const boardContainerStyle = `flex flex-1 basis-full h-[calc(100vh-50px)] justify-center items-center align-center bg-lightGray dark:bg-black`;
const emptyBoardText = `text-medGray font-bold text-md mb-5`;
const columnsWrapper = 'flex h-full w-full flex-1';
const columnWrapper = 'flex flex-col w-full mt-10 ml-5';
const columnHeaderText = 'text-medGray tracking-widest font-bold text-sm uppercase';
export default function Board() {
  const { boards } = useContext(BoardContext);
  const { selectedBoard } = useContext(BoardContext);
  const selectedBoardData = boards.find((board) => board.name === selectedBoard);

  if (!selectedBoardData || !selectedBoardData.columns || selectedBoardData.columns.length === 0) {
    // If the selected board or columns array is empty, display the empty board text
    return (
      <div className={boardContainerStyle}>
        <div className={emptyBoardText}>
          This board is empty. Create a new column to get started.
        </div>
        <Button variant={ButtonVariant.primary}>+ Add New Column</Button>
      </div>
    );
  }

  const columns = selectedBoardData.columns;

  return (
    <div className={boardContainerStyle}>
      {columns.map((column) => (
        <div className={columnsWrapper}>
          <div className={columnWrapper}>
            <div className={columnHeaderText}>
              {column.name} ({column.tasks.length})
            </div>
            <Column tasks={column.tasks}/>
          </div>
        </div>
      ))}
    </div>
  );
}
