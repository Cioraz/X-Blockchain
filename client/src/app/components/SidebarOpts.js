const styles={
    wrapper: 'w-min flex items-center rounded-[100px] cursor-pointer hover:bg-[#333c45] p-4 transition-all hover:duration-200 ease-in-out' ,
    iconContainer: 'text-xl mr-4',
    textGeneral: 'font-medium',
    textActive: 'font-bold',
}

function SidebarOpts({text,Icon,isActive,setSelected,redirect}){
    return(
        <div className={styles.wrapper} onClick={()=> setSelected(text)}>

            <div className={styles.iconContainer}>
                <Icon/>
            </div>
            <div className={`${isActive? styles.textActive:styles.textGeneral}`}>{text}</div>


        </div>
    )
}

export default SidebarOpts;