import React, { useEffect, useState } from 'react';
import './ChatBubble.scss';
import moment from 'moment';

interface ChatBubbleProps {
  text: string;
  isOwnMessage: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, isOwnMessage }) => {
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    setCurrentTime(moment().format('hh:mm A'));
  }, [text]);

  return (
    <div
      className={`chat-bubble ${
        isOwnMessage ? 'own-message' : 'other-message'
      }`}
    >
      <div>{text}</div>
      <div className="bubble-time">{currentTime}</div>
    </div>
  );
};

export default ChatBubble;
