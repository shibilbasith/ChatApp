import React, { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage';
import { FolderAddOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import useConversation from '../../store/useConversation';

const MessageInput = () => {
  const {  messages, setMessages, selectedConversation } = useConversation();

  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  // const [fileList, setFileList] = useState([]);

  const [file, setFile] = useState(null);


  // const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  // const fileList = [];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (file) {
    //   const formData = new FormData();
    //   formData.append('files', file);
    //   try {
    //     const response = await fetch(`/api/messages/send/${selectedConversation._id}`, {
    //       method: 'POST',
    //       body: formData,
    //     });
    //     const data = await response.json();
    //     // Send the file path to your database
    //     if (data.error) throw new Error(data.error);

		// 	setMessages([...messages, data]);
    //   } catch (error) {
    //     console.error('Error uploading file:', error);
    //   }
    // }

    if (!message && !file) return;
    await sendMessage({ message, file });


    setMessage("");
    setFile(null)
    setPreviewUrls([])

  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    // setSelectedFiles(files);

    setFile(files[0]);


    // Create preview URLs for selected files
    const urls = [];
    for (let i = 0; i < files.length; i++) {
      // urls.push(URL.createObjectURL(files[i]));
      const file = files[i];
      if (file.type.startsWith('image/')) {
        // For images, create object URLs
        urls.push(URL.createObjectURL(file));
      } else {
        // For PDFs, push the file object itself
        urls.push(file);
      }
    }
    setPreviewUrls(prevUrls => [...prevUrls, ...urls]);
  };


  const attachClose = (urlToRemove) => {
    // setPreviewUrls([...previewUrls, url])
    const updatedUrls = previewUrls.filter(url => url !== urlToRemove);
    setPreviewUrls(updatedUrls);
  }


  return (
    <>
      <div className="input_child1">
        <form onSubmit={handleSubmit} class="Msg_input_left">

          <div className='attach_msg_container'>
            {previewUrls.map((url, index) => (
              <div className='attach_msg_cnt' onClick={() => attachClose(url)}>
                <img key={index} src={ url instanceof File && url.type != 'image/jpeg' ? 'https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-file-home-office-vitaliy-gorbachev-blue-vitaly-gorbachev.png' : url} alt={`Preview ${index}`} style={{ width: '60px', height: '60px', margin: '2px', borderRadius:'10px' }} />
                <div className='imgOverlay'><div style={{width:'30px'}}><img src="https://img.icons8.com/ios-glyphs/30/FA5252/filled-trash.png" alt="filled-trash" /></div></div>
                {/* <div style={{ textAlign: 'center' }}>nameeeee</div> */}
                {/* <div style={{ cursor: 'pointer', width: '20px', marginRight: '5px' }} onClick={() => attachClose(url)}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FA5252/filled-trash.png" alt="filled-trash" /></div> */}
              </div>))}
          </div>
 

          <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
            <div class="messageContainer_input_addFile"><img
              src="https://img.icons8.com/ios-glyphs/30/attach.png" alt="attach" />
            </div>
          </label>
          <input
            id="fileInput"
            type="file"
            onChange={handleFileChange}
            multiple
            style={{ display: 'none' }} // Hide the default file input
          />
          <div class="messageContainer_input_text"><input type="text" placeholder="Write messages..." value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
        </form>
      </div>


      <div className="input_child2" onClick={handleSubmit}>
        <div class="messageContainer_input_img"><img
          src="https://img.icons8.com/material-rounded/24/FFFFFF/filled-sent.png"
          alt="filled-sent" /></div>
      </div>




















      {/* <form onSubmit={handleSubmit} class="Msg_input_left">


        <div className='attach_msg_container'>
          {previewUrls.map((url, index) => (
            <div className='attach_msg_cnt'>
              <img key={index} src={url} alt={`Preview ${index}`} style={{ width: '60px', height: '60px', margin: '5px' }} />
              <div style={{ textAlign: 'center' }}>nameeeee</div>
              <div style={{ cursor: 'pointer', width: '20px', marginRight: '5px' }} onClick={() => attachClose(url)}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FA5252/filled-trash.png" alt="filled-trash" /></div>
            </div>))}
        </div>


        <label htmlFor="fileInput" style={{ cursor: 'pointer' }}>
          <div class="messageContainer_input_addFile"><img
            src="https://img.icons8.com/ios-glyphs/30/attach.png" alt="attach" />
          </div>
        </label>
        <input
          id="fileInput"
          type="file"
          onChange={handleFileChange}
          multiple
          style={{ display: 'none' }} // Hide the default file input
        />
        <div class="messageContainer_input_text"><input type="text" placeholder="Write messages..." value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
      </form>
      <div class="messageContainer_input_sendMsg" onClick={handleSubmit}>
        <div class="messageContainer_input_img"><img
          src="https://img.icons8.com/material-rounded/24/FFFFFF/filled-sent.png"
          alt="filled-sent" /></div>
      </div> */}
    </>
  )
}

export default MessageInput