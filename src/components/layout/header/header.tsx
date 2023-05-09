import { Button, ButtonVariant } from "../../UI/button/Button"

const headerStyles = 'box-border flex flex-1 dark:bg-darkGrey items-center px-5 gap-5 basis-full justify-between font-semibold w-screen h-[100px] bg-white border-b border-lightLines dark:border-darkLines'
const currentBoardLabel = 'flex flex-1 text-black dark:text-white tracking-normal  text-2xl'
const logoStyle = 'box-border flex-1 m-0 w-[113px] min-w-max p-4 dark:bg-darkGrey';
const logoWrapper = 'box-border border-lightLines dark:border-darkLines  border-r w-[300px]'; 

type HeaderProps = {
    isDarkMode: boolean; 
}
export default function Header(props: HeaderProps) {
    const {isDarkMode} = props; 
    return (
        <div className={headerStyles}>
    {isDarkMode ? <div className={logoWrapper}><img className={logoStyle} src="/icons/logo-light.svg"/> </div>: <div className={logoWrapper}><img className={logoStyle} src="/icons/logo-dark.svg"/></div>}

        <div className={currentBoardLabel}>Platform Launch</div>
        
        <Button variant={ButtonVariant.secondary}>+ Add New Task</Button>
        <Button variant={ButtonVariant.empty}><img src="/icons/icon-vertical-ellipsis.svg" /></Button>
        </div>
    )
}