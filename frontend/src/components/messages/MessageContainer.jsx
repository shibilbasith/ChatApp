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




  //--------------------MULTER---------------------

  const [file, setFile] = useState(null);

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('File uploaded successfully:', data.filePath);
      // Send the file path to your database
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };




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
            <MessageHeader />
          <div class="innerChild1">
            <Messages />
            </div>
          <div class="innerChild2">
            <MessageInput />
            {/* <div className="input_child1"></div>
            <div className="input_child2"></div> */}
          </div>
        </div>
      </div>
      :
      <div>
        No message

        <form onSubmit={onSubmit}>
          <input type="file" onChange={onChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
    }
  </>)
}

export default MessageContainer