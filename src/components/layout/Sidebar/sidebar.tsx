import React from 'react'; 
import { SidebarLink } from '../../UI/sidebarLink/sidebarlink';
type SidebarProps = {
    toggleDarkMode: () => void; 
    isDarkMode: boolean; 
    toggleSidebar: () => void; 
    isSidebarVisible: boolean; 
}
const boards = 'flex flex-col w-full  self-start';
const toggles = 'flex flex-col w-full self-end';
const toggleModeStyle = 'cursor-pointer ml-7 my-2 flex h-[50px] justify-center gap-6  p-4 flex bg-lightGray dark:bg-darkGreyTwo rounded-md';
const sidebarStyle = 'box-border flex flex-1 border-r border-lightLines dark:border-darkLines w-[320px] flex flex-col h-[calc(100vh-50px)] justify-between m-0 pr-[25px] px-0 py-4 bg-white dark:bg-darkGrey '
const allBoardsStyle = 'pl-5 font-bold text-xs font-sans text-medGray tracking-extrawide uppercase'
 
export default function Sidebar(props: SidebarProps) {
    const {toggleDarkMode, isDarkMode, toggleSidebar} = props;
 return (
    <div className={sidebarStyle}>
        <div className={boards}>
            <div className={allBoardsStyle}>All Boards</div>
        <SidebarLink textColor={"mainPurple"}><img src="/icons/icon-board.svg"/>+ Create New Board</SidebarLink>
            </div>
        <div className={toggles}>
        <div className={toggleModeStyle} onClick={toggleDarkMode}><img src="/icons/icon-light-theme.svg" />
            {isDarkMode ? <img src="/icons/dark-slider.svg" />
            : <img src="/icons/light-slider.svg" /> }
            <img src="/icons/icon-dark-theme.svg" />
        </div>
        <SidebarLink onClick={toggleSidebar}><img src="/icons/icon-hide-sidebar.svg" />Hide Sidebar</SidebarLink>
        </div>
    </div>
   
 )
}