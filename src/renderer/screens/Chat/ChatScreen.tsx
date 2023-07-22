import React, { useState } from 'react';
import UserCard from '../../components/UserCard/UserCard';
import icon from '../../../../assets/user.png';
import editIcon from '../../../../assets/edit.png';
import sendIcon from '../../../../assets/Send.png';
import ChatBubble from '../../components/ChatBubble/ChatBubble';
import ChatHeader from 'renderer/components/ChatHeader/ChatHeader';

type ChatMessage = {
  message: string;
  isOwnMessage: boolean;
};

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<ChatMessage[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    setChat((prevState: any) => [
      ...prevState,
      { message: message, isOwnMessage: prevState.length % 2 === 0 },
    ]);
    setMessage('');
  };

  return (
    <>
      <div className="chat-container">
        <div className="users">
          <UserCard
            profileImageUrl={icon}
            name={'Darryl'}
            tagline={'Lastime we had the converstaion'}
            time={'6:14 PM'}
          />
          <button onClick={() => console.log('edit clicked')}>
            <img src={editIcon} height={80} width={80} alt={'edit icons'} />
          </button>
        </div>
        <div className="message-container">
          <ChatHeader
            profileImageUrl={icon}
            name={'Darryl'}
            tagline={'Lastime we had the converstaion'}
          />
          <div className="chat">
            {chat.map((message, index) => (
              <ChatBubble
                key={`${index}-${message.message.substring(
                  0,
                  Math.min(message.message.length, 4)
                )}`}
                text={message.message}
                isOwnMessage={message.isOwnMessage}
              />
            ))}
            <div className="message-send">
              <input
                type="text"
                value={message}
                onChange={handleInputChange}
                placeholder="Message"
                className="msg-input"
              />
              <button className="msg-send" onClick={handleSend}>
                <img src={sendIcon} height={30} width={30} alt={'edit icons'} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
