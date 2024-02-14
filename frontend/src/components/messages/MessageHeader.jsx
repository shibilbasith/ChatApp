import React from 'react'
import useSelectedUser from '../../store/useSelectedUser';

const MessageHeader = () => {

    const { selectedUser } = useSelectedUser();
    console.log("🚀 ~ MessageHeader ~ selectedUser:", selectedUser)
  
    return (
        <div class="messageContainer_header">
            <div class="messageContainer_header_avatar"><img class="avatar-round"
                src="https://avatar.iran.liara.run/public/boy" alt="" /></div>
            <div class="messageContainer_header_name">Rahul</div>
            <div class="messageContainer_header_info"><img src="https://img.icons8.com/ios/50/000000/info--v1.png"
                alt="info--v1" /></div>
        </div>
    )
}

export default MessageHeader