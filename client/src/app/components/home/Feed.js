import { BsStars } from "react-icons/bs";
import SendMsg from './SendMsg';
import Post from "../Post";

const styles={
    wrapper:'flex-[2] border-r border-l border-[#38444d]',
    header:'sticky top-0 bg-[15202b] z-10 p-4 flex items-center justify-between',
    headerTitle: 'text-xl font-bold'
}

const feed = [
    {
        displayName: 'John Doe',
        username: '@john_doe',
        profileImage: 'https://randomuser.me/api/portraits',
        text: 'Hello World',
        isProfileImageNFT: false,
        timestamp: '2020-06-01T00:00:00Z',
    },
    {
        displayName: 'John Doe',
        username: '@john_doe',
        profileImage: 'https://randomuser.me/api/portraits',
        text: 'Hello World',
        isProfileImageNFT: false,
        timestamp: '2020-06-01T00:00:00Z',
    },
    {
        displayName: 'John Doe',
        username: '@john_doe',
        profileImage: 'https://randomuser.me/api/portraits',
        text: 'Hello World',
        isProfileImageNFT: false,
        timestamp: '2020-06-01T00:00:00Z',
    },
    {
        displayName: 'John Doe',
        username: '@john_doe',
        profileImage: 'https://randomuser.me/api/portraits',
        text: 'Hello World',
        isProfileImageNFT: false,
        timestamp: '2020-06-01T00:00:00Z',
    },
    {
        displayName: 'John Doe',
        username: '@john_doe',
        profileImage: 'https://randomuser.me/api/portraits',
        text: 'Hello World',
        isProfileImageNFT: false,
        timestamp: '2020-06-01T00:00:00Z',
    },


]

function Feed(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2 className={styles.headerTitle}>Home</h2>
                <BsStars/>
            </div>
            <SendMsg/>
            {
                feed.map((post,index) =>{
                    <Post
                        key={index}
                        displayName={post.displayName}
                        username={post.username}
                        profileImage={post.profileImage}
                        text={post.text}
                        isProfileImageNFT={post.isProfileImageNFT}
                        timestamp={post.timestamp}
                    />
                })
            }
        </div>
    )
}

export default Feed;