import React, { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    // <div>
    //     <form onSubmit={handleSubmit}>
    //         <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
    //         <button>Send</button>
    //     </form>
    // </div>

    <>
      <form onSubmit={handleSubmit} class="Msg_input_left">
        <div class="messageContainer_input_addFile"><img
          src="https://img.icons8.com/ios-glyphs/30/attach.png" alt="attach" /></div>
        <div class="messageContainer_input_text"><input type="text" placeholder="Write messages..." value={message} onChange={(e) => setMessage(e.target.value)}/>
        </div>
      </form>
      <div class="messageContainer_input_sendMsg" onClick={handleSubmit}>
        <div class="messageContainer_input_img"><img
          src="https://img.icons8.com/material-rounded/24/FFFFFF/filled-sent.png"
          alt="filled-sent" /></div>
      </div>
    </>
  )
}

export default MessageInput