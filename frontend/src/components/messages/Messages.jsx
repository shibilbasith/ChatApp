import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();

  const lastMessageRef = useRef();
  useEffect(() => {
  	setTimeout(() => {
  		lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  	}, 100);
  }, [messages]);
  return (
    <>
      {messages?.map((message) => (
        <div key={message?._id} ref={lastMessageRef}>
          <Message message={message} />
        </div>
      ))}
    </>

  )
}

export default Messages