import React, { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage';
import { FolderAddOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const [fileList, setFileList] = useState([]);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  // const fileList = [];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message && !fileList) return;
    await sendMessage({ message, selectedFiles });
    setMessage("");
    setFileList([]);
  };




  // // Function to handle file change event
  // const handleChange = (info) => {
  //   let fileList = [...info.fileList];

  //   // Limiting the number of uploaded files
  //   fileList = fileList.slice(-1);

  //   // Update state with the new file list
  //   setFileList(fileList);

  // };

  // const handleUpload = () => {
  //   const formData = new FormData();
  //   for (let i = 0; i < selectedFiles.length; i++) {
  //     formData.append(`file${i}`, selectedFiles[i]);
  //   }
  // };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);

    // Create preview URLs for selected files
    const urls = [];
    for (let i = 0; i < files.length; i++) {
      urls.push(URL.createObjectURL(files[i]));
    }
    setPreviewUrls(prevUrls => [...prevUrls, ...urls]);
  };


  const attachClose = (urlToRemove) => {
    // setPreviewUrls([...previewUrls, url])
    const updatedUrls = previewUrls.filter(url => url !== urlToRemove);
    setPreviewUrls(updatedUrls);
  }

  return (
    // <div>
    //     <form onSubmit={handleSubmit}>
    //         <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
    //         <button>Send</button>
    //     </form>
    // </div>

    <>

      {/* <div className='upload_container'>
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture"
          defaultFileList={[...fileList]}
          className="upload-list-inline"
        >
          <Button icon={<FolderAddOutlined />}></Button>
        </Upload>
      </div> */}





      <form onSubmit={handleSubmit} class="Msg_input_left">


        <div className='attach_msg_container'>
          {previewUrls.map((url, index) => (
          <div className='attach_msg_cnt'>
            <img key={index} src={url} alt={`Preview ${index}`} style={{ width: '60px', height: '60px', margin: '5px' }} />
            <div style={{textAlign:'center'}}>nameeeee</div>
            <div style={{cursor:'pointer', width:'20px', marginRight:'5px'}} onClick={() => attachClose(url)}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FA5252/filled-trash.png" alt="filled-trash"/></div>
          </div>))}
        </div>

        {/* <div className='upload_container'>
          <Upload
            onChange={handleChange}
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture"
            defaultFileList={[...fileList]}
            className="upload-list-inline"
          >
            <Button icon={<FolderAddOutlined style={{ fontSize: '30px' }} />} className='uploadImg_btn' style={{ border: 'none' }}>
            
            </Button>
          </Upload>
        </div> */}

        {/* <input type="file" onChange={handleFileChange} multiple /> */}
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
      </div>
    </>
  )
}

export default MessageInput