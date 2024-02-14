import React, { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage';
import { FolderAddOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };



  const fileList = [
    // {
    //   uid: '0',
    //   name: 'xxx.png',
    //   status: 'uploading', //done, error
    //   percent: 33,
    // },
    // {
    //   uid: '0',
    //   name: 'xxx.png',
    //   status: 'done', //done, error
    //   percent: 33,
    // },
  ];

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

      <div className='upload_container'>
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture"
          defaultFileList={[...fileList]}
          className="upload-list-inline"
        >
          <Button icon={<FolderAddOutlined style={{ fontSize: '30px' }} />} className='uploadImg_btn' style={{border:'none'}}>
            {/* <div class="messageContainer_input_addFile"><img
          src="https://img.icons8.com/ios-glyphs/30/attach.png" alt="attach" /></div> */}
          </Button>
        </Upload>
      </div>
        {/* <div class="messageContainer_input_addFile"><img
          src="https://img.icons8.com/ios-glyphs/30/attach.png" alt="attach" /></div> */}
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