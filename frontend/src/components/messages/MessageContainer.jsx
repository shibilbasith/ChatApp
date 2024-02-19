import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import useConversation from '../../store/useConversation';
import MessageHeader from './MessageHeader';
import addNotification from 'react-push-notification';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])
 
  return (<>
    {selectedConversation ?

      // <div class="messageContainer">
      //   <MessageHeader />
      //   <div class="messageContainerBox">
      //     {/* <div class="messageContainer_mainHeader">
      //       <MessageHeader />
      //     </div> */}
      //     <div class="messageContainer_messages">
      //       <Messages />
      //     </div>
      //     <div class="messageContainer_input">
      //       <MessageInput />
      //     </div>
      //   </div>
      // </div>


      <div class="parent">
        <div class="child2">
          <div className="innerChild"><MessageHeader /></div>
          <div class="innerChild1"><Messages /></div>
          <div class="innerChild2">
            {/* <MessageInput /> */}
            <div className="input_child1"></div>
            <div className="input_child2"></div>
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