import Head from "next/head";
import Sidebar from "../app/components/Sidebar";

const styles ={
  wrapper: 'h-screen w-screen flex justify-center bg-black test-white select-none',
  content: 'max-w-[1400px] w-2/3 flex justify-between'
}

export default function Home() {
  return(
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Sidebar/>
        <h2>Feed</h2>
        <h2>Widgets</h2>
      </div>
    </div>
  )
}