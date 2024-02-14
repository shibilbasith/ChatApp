import React from 'react'
import { useAuthStore } from '../../store/authStore';

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
  


  return (
    <>
      {/* <div style={{float: fromMe?'right':'left', background: fromMe?'#4407BD':'#545458', color:'#fff', borderRadius:'5px'}}>
    {message?.message}
    </div> <br /> */}

      <div class="singleMsgContainer">

        <div class={fromMe ? "sendByMe" : "singleMessage_cnt"}>

          <div class="singleMessage">{message?.message}</div>
          <div class="singleMessageTime">{timeString}{fromMe &&
              <img class="singleMessageTick" src="https://img.icons8.com/ios/50/4D4D4D/double-tick.png" alt="double-tick" />}
          </div>
        </div>
      </div><br /> <br />
    </>
  )
}

export default Message