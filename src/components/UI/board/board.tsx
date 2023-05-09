import { Button, ButtonVariant } from "../../UI/button/Button"


const boardContainerStyle = `flex flex-1 flex-col basis-full h-[calc(100vh-50px)] justify-center items-center align-center bg-lightGray dark:bg-black`; 
const emptyBoardText = `text-medGray font-bold text-md mb-5`;
export default function Board() {
    return (
        <div className={boardContainerStyle}>
            <div className={emptyBoardText}>This board is empty. Create a new column to get started.</div>
            <Button variant={ButtonVariant.primary}>+ Add New Column</Button>
        </div>

    )
}