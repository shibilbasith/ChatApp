import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../store/useConversation';
import MessageHeader from './MessageHeader';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (<>
    {selectedConversation ?
      // <div style={{ marginTop: '50px' }}>
      //   <Messages />
      //   <MessageInput />
      // </div>

      <div class="messageContainer">
        <MessageHeader />
        <div class="messageContainerBox">
          <div class="messageContainer_messages">
            <Messages />
          </div>
          <div class="messageContainer_input">
            <MessageInput />
          </div>
        </div>
      </div>

      :
      <div>
        No message
      </div>
    }

  </>)
}

export default MessageContainer