import { useState } from 'react'

import Sidebar from './components/layout/Sidebar/sidebar';
import Header from './components/layout/header/header';
import Board from './components/UI/board/board';
const showSidebarStyle = 'hover:cursor-pointer hover:bg-mainPurpleHover bottom-10 fixed bg-mainPurple rounded-r-3xl p-4';
const appThemeLight = 'box-border flex flex-col bg-lightGray m-0 p-0';
const appThemeDark = 'box-border flex flex-col dark bg-black m-0 p-0';
const flexWrapper = 'flex';
const flexWrapperCol = 'flex-col';
function App() {
  const [isDarkMode, setDarkMode] = useState(false); 
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); 

  const toggleDarkMode = () => {
    setDarkMode((isDarkMode => !isDarkMode)); 
  }

  const toggleSidebar = () => {
    setIsSidebarVisible((isSidebarVisible => !isSidebarVisible))
  }
  return (
    <div className={isDarkMode ? appThemeDark : appThemeLight}>
<Header isDarkMode={isDarkMode} /> 
<div className={flexWrapper}>
  <div className={flexWrapperCol}>
  

   {isSidebarVisible ? <Sidebar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} toggleSidebar={toggleSidebar}
   isSidebarVisible={isSidebarVisible}/> 
 
  : <div onClick={toggleSidebar}><img className={showSidebarStyle} src="/icons/icon-show-sidebar.svg"/></div>}
   
    </div>
    
    <Board /> 
    </div>
    </div>
  
  )
}


export default App;
