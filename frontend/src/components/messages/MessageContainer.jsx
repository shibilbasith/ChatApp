import React, { useEffect, useState } from 'react'
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
      <div class="parent">
        <div class="child2">
          <MessageHeader />
          <div class="innerChild1">
            <Messages />
          </div>
          <div class="innerChild2">
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