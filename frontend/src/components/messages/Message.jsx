import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../../store/authStore';
import axios from 'axios';

const Message = ({ message }) => {
  const authUser = useAuthStore((state) => state.authUser);
  const fromMe = message?.senderId === authUser._id;

  // time format
  const date = new Date(message?.createdAt);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;


  const isImageFile = (fileLocation) => {
    return ['.jpg', '.jpeg', '.png'].some(ext => fileLocation.endsWith(ext));
  };

  return (
    <>

      <div /* style={{ display: 'flex', justifyContent: fromMe ? 'end' : 'start' }} */ class={fromMe ? "sendByMe_og" : "singleMessage_cnt_og"}>
        <div>
          <div className={message?.fileLocation ? '' : 'singleMessage_og'}>
            {message?.fileLocation && <div style={{ width: isImageFile(message.fileLocation) ? '170px': '190px', height: isImageFile(message.fileLocation) ? '150px':'' }}>
              <a href={`http://192.168.12.88:5009/${message?.fileLocation}`} target='_blank' download style={{textDecoration:'none', color:'#0d0d0d'}}>

                {isImageFile(message.fileLocation) ? <img style={{ borderRadius: '10px' }} src={`http://192.168.12.88:5009/${message?.fileLocation}`} alt="" /> //For Image
                  :
                  <div className='getFilMessage'>
                    <div style={{width:'80px'}}><img src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-file-home-office-vitaliy-gorbachev-blue-vitaly-gorbachev.png" alt="external-file-home-office-vitaliy-gorbachev-blue-vitaly-gorbachev" /></div>
                    <div style={{wordBreak:'break-all'}}>{message?.fileLocation.split('/').pop()}</div>
                  </div>}

              </a>
            </div>}
            {message?.message}
          </div>
          <div class={fromMe ? "singleMessageTime_byme_og" : "singleMessageTime_og"} >{timeString}{fromMe &&
            <img class="singleMessageTick" src="https://img.icons8.com/ios/50/4D4D4D/double-tick.png" alt="double-tick" />}
          </div>
        </div>
      </div>

    </>
  )
}

export default Message