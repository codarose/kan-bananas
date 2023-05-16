import React, { useState, Dispatch } from 'react';
import data from '../../../../../mockdata/data.json';
import { BoardType } from '../../../../../api/data.types';

// to do here
// create globally accessible context for:
// 1. the "boards" array
// 2. the "selected board" state

//pass the functionality to update global state

const initialData: BoardType[] = data.boards;
const firstBoard = initialData[0].name;
type BoardContextProviderProps = {
  children: React.ReactNode;
};

type BoardContextType = {
  selectedBoard: string;
  setSelectedBoard: Dispatch<React.SetStateAction<string>>;
  boards: BoardType[];
  // addNewBoard: Dispatch<React.SetStateAction<BoardType[]>>;
  addNewBoard: (newBoard: BoardType) => void; 
};

const defaultContext: BoardContextType = {
  selectedBoard: firstBoard,
  setSelectedBoard: () => {},
  boards: initialData,
  addNewBoard: () => {}
};

export const BoardContext = React.createContext(defaultContext);

export function BoardProvider({ children }: BoardContextProviderProps) {
  const [selectedBoard, setSelectedBoard] = useState(defaultContext.selectedBoard);
  const [boards, setBoards] = useState<BoardType[]>(defaultContext.boards);

  const addNewBoard = (newBoard: BoardType) => {
    setBoards((prevBoards) => [...prevBoards, newBoard]);
  };
  return (
    <BoardContext.Provider
      value={{
        selectedBoard,
        setSelectedBoard,
        boards,
        addNewBoard
      }}>
      {children}
    </BoardContext.Provider>
  );
}
