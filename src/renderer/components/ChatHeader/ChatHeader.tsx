import React from 'react';
import './ChatHeader.scss';

interface ChatHeaderProps {
  profileImageUrl: string;
  name: string;
  tagline: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  profileImageUrl,
  name,
  tagline,
}) => {
  return (
    <div className="user-header">
      <img
        className="header-profile-image"
        src={profileImageUrl}
        alt="Profile"
      />
      <div className="header-info">
        <div className="header-name ">{name}</div>
        <div className="header-tagline">{tagline}</div>
      </div>
    </div>
  );
};

export default ChatHeader;
