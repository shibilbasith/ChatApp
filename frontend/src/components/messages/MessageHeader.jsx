import React from 'react'
import useConversation from '../../store/useConversation';
import { Avatar, Space } from 'antd';

const MessageHeader = () => {

    const { selectedConversation } = useConversation();

    const colorHexGen = selectedConversation.fullName.slice(0, 1).toUpperCase()


    return (
        <div className="innerChild">
            {/* <div class="messageContainer_header"> */}
                {/* <div class="messageContainer_header_avatar"><img class="avatar-round"
                    src={selectedConversation.profilePic ?? "https://avatar.iran.liara.run/public/boy"} alt="" /></div> */}
                          <Space wrap size={16}>
                        <Avatar style={{ backgroundColor: `${colorHexGen == 'R' ? '#87233e' : colorHexGen == 'G' ? '#7f2387' : '#2b8723'}`, verticalAlign: 'middle' }} size="large">
                            {selectedConversation.fullName.slice(0, 1).toUpperCase()}
                        </Avatar>
                    </Space>
                <div class="messageContainer_header_name">{selectedConversation.fullName}</div>
                <div class="messageContainer_header_info"><img src="https://img.icons8.com/ios/50/000000/info--v1.png"
                    alt="info--v1" /></div>
            {/* </div> */}
        </div>
    )
}

export default MessageHeader