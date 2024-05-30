"use client";
import SidebarOpts from './SidebarOpts';
import { useState } from 'react';

// Getting ICONS
import {RiHome7Line, RiHome7Fill, RiFileList2Fill} from 'react-icons/ri';
import {BiBookmark, BiBookmarkAlt, BiHash, BiSolidBookmark} from 'react-icons/bi';
import {FiBell,FiMoreHorizontal,FiUmbrella} from 'react-icons/fi';
import {HiOutlineMail,HiMail} from 'react-icons/hi';
import {FaRegListAlt,FaHashtag,FaBell} from 'react-icons/fa';
import {CgMoreO} from 'react-icons/cg';
import {BsPerson,BsPersonFill} from 'react-icons/bs';

const styles={
    wrapper: 'flex-[0.6] flex-col px-8',
    mainIcon: 'text-3xl m-4',
    mintButton: 'bg-[#1d9bf0] text-white font-bold rounded-3xl h-[50px] flex justify-center items-center mt-5 cursor-pointer',
    navContainer: 'flex-1',
    profileButton: 'flex items-center cursor-pointer',
    profileLeft: 'flex item-center justify-center mr-4',
    profileImage: 'height-12 w-12 rounded-full',
    profileRight: 'flex-1',
    details:'flex-1',
    name: 'text-lg',
    handle: 'text-[#8899a6]',
    moreContainer: 'flex items-center mr-2',
}

function Sidebar({initialSelected='Home'}){
    const [selected,setSelected] = useState(initialSelected);
    return(
        <div className={styles.wrapper}>
            <div className={styles.mainIcon}>
                <FiUmbrella/>
            </div>
            <div className={styles.navContainer}>
                <SidebarOpts 
                    text="Home" 
                    Icon={selected==='Home'?RiHome7Fill:RiHome7Line}
                    isActive={Boolean(selected==='Home')}
                    setSelected={setSelected}
                    redirect={null}
                />
                <SidebarOpts
                    text="Explore"
                    Icon={selected==='Explore'?FaHashtag:BiHash}
                    isActive={Boolean(selected==='Explore')}
                    setSelected={setSelected}
                    redirect={null}
                />
                <SidebarOpts
                    text="Notifications"
                    Icon={selected==='Notifications'?FaBell:FiBell}
                    isActive={Boolean(selected==='Notifications')}
                    setSelected={setSelected}
                    redirect={null}
                />
                <SidebarOpts
                    text="Messages"
                    Icon={selected==='Messages'?HiMail:HiOutlineMail}
                    isActive={Boolean(selected==='Messages')}
                    setSelected={setSelected}
                    redirect={null}
                />
                <SidebarOpts
                    text="Bookmarks"
                    Icon={selected==='Bookmarks'?BiSolidBookmark:BiBookmarkAlt}
                    isActive={Boolean(selected==='Bookmarks')}
                    setSelected={setSelected}
                    redirect={null}
                />
                <SidebarOpts
                    text="Lists"
                    Icon={selected==='Lists'?RiFileList2Fill:FaRegListAlt}
                    isActive={Boolean(selected==='Lists')}
                    setSelected={setSelected}
                    redirect={null}
                />
                <SidebarOpts
                    text="Profile"
                    Icon={selected==='Profile'?BsPersonFill:BsPerson}
                    isActive={Boolean(selected==='Profile')}
                    setSelected={setSelected}
                    redirect={null}
                />
                <SidebarOpts
                    text="More"
                    Icon={selected==='More'?CgMoreO:FiMoreHorizontal}
                    isActive={Boolean(selected==='More')}
                    setSelected={setSelected}
                    redirect={null}
                />

                <div className={styles.mintButton}>Mint Now!</div>
            </div>
            <div className={styles.profileButton}>
                <div className={styles.profileLeft}></div>
                <div className={styles.profileRight}>
                    <div className={styles.details}>
                        <div className={styles.name}>Sunil</div>
                        <div className={styles.handle}>(something here)</div>
                    </div>
                    <div className={styles.moreContainer}>
                        <FiMoreHorizontal/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Sidebar;