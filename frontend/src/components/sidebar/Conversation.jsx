import React, { useEffect } from 'react'
import useConversation from '../../store/useConversation';
import { useSocketContext } from '../../context/SocketContext';
import no_img from '../../assets/no-img.png'
import useSelectedUser from '../../store/useSelectedUser';

const Conversation = ({ conversation }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const { setSelectedUser } = useSelectedUser();
    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);


    useEffect(() => {
        if (isSelected) {
            setSelectedUser(conversation)
        }
    }, [isSelected])


    return (
        <>
            {/* <div style={{cursor:'pointer', display: 'flex', alignItems: 'center', marginTop: '10px', background: isSelected ? '#ccc' : '' }}
            onClick={()=>setSelectedConversation(conversation)}
            >
                <img style={{ width: '30px', height: '30px' }} src="https://cdn.icon-icons.com/icons2/603/PNG/512/face_human_blank_user_avatar_mannequin_dummy_icon-icons.com_55975.png" alt="" />
                <div style={{background: isOnline ? 'green': ''}}>{conversation.fullName}</div>
            </div> */}

            <div class="chats_singleChat" style={isSelected ? { background: '#f5f5f5' } : {}} onClick={() => setSelectedConversation(conversation)}>
                <div class="singleChat_avatar">
                    {isOnline && <div class="online-status"></div>}
                    <img class="avatar-round" src={conversation.profilePic ?? no_img} alt="avatar" />
                    <div class="singleChat_name">{conversation.fullName}</div>
                </div>
                {/* <div class="singleChat_notify">6</div> */}
            </div>
            <hr />
        </>
    )
}

export default Conversation