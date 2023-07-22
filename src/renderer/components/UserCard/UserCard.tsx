import React from 'react';
import './UserCard.scss';

interface UserCardProps {
  profileImageUrl: string;
  name: string;
  tagline: string;
  time: string;
}

const UserCard: React.FC<UserCardProps> = ({
  profileImageUrl,
  name,
  tagline,
  time,
}) => {
  return (
    <div className="user-card">
      <img className="profile-image" src={profileImageUrl} alt="Profile" />
      <div className="user-info">
        <div className="name">{name}</div>
        <div className="tagline">{tagline}</div>
      </div>
      <div className="time">{time}</div>
    </div>
  );
};

export default UserCard;
