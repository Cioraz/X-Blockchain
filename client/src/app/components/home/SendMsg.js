"use client"
import React, { useState } from 'react'
import {BsCardImage, BsEmojiSmile} from 'react-icons/bs'
import { RiBarChartHorizontalFill, RiFileGifLine } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'


const styles={
  wrapper: 'px-4 flex flex-row border-b border-[#38444d] pb-4',
  xboxLeft: 'mr-3',
  xboxRight: 'flex-1',
  profileImage: 'height-12 w-12 rounded-full',
  inputField: 'w-full h-full outline-none bg-transparent  text-lg ',
  formLowerContainer: 'flex',
  iconsContainer: 'text-[#1d9bf0] flex flex-1 items-center',
  icon: 'mr-2',
  submitGeneral: 'px-6 py-2 rounded-3xl font-bold',
  inactiveSubmit: 'bg-[#1d9bf0] text-white opacity-50 cursor-not-allowed rounded-xl p-2',
  activeSubmit: 'bg-[#1d9bf0] text-white cursor-pointer rounded-xl p-3',
}

const SendMsg = () => {
  const [xmsg,setxmsg] = useState('');

  const postMsg = (event) =>{
    console.log(xmsg);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.xboxLeft}>
        <img src="https://randomuser.me/api/portraits" alt="profile" className={styles.profileImage}/>
      </div>
      <div className={styles.xboxRight}>
        <form onSubmit={postMsg}>
          <textarea placeholder="What's happening?" className={styles.inputField} value={xmsg} onChange={(e)=>setxmsg(e.target.value)}/>
          <div className={styles.formLowerContainer}>
            <div className={styles.iconsContainer}>
              <BsCardImage className={styles.icon}/>
              <RiFileGifLine className={styles.icon}/>
              <RiBarChartHorizontalFill className={styles.icon}/>
              <BsEmojiSmile className={styles.icon}/>
              <IoMdCalendar className={styles.icon}/>
              <MdOutlineLocationOn className={styles.icon}/>
            </div>
            <button type="submit" className={xmsg.length > 0 ? styles.activeSubmit : styles.inactiveSubmit}>Tweet</button>
          </div>
        </form>
      </div>
    </div>

  )
}

export default SendMsg
