import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
      <div class="conversations_chats">
        <p>ALL</p>
        {conversations && conversations.map((conversation) => (
          <Conversation
            key={conversation._id}
            conversation={conversation} />
        ))}
      </div>

  )
}

export default Conversations