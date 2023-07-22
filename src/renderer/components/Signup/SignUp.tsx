import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.scss';

import OnboardContainer from '../onboard/Onboard';

const Signup = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  // const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleOnNext = () => {
    console.log('on next');
    // navigate('/signupsms');
  };

  return (
    <OnboardContainer
      title="What's your Phone Number?"
      nextpage="/signupsms"
      onNext={handleOnNext}
    >
      <div className="input-container">
        <button className="country-code">+1</button>
        <input
          type="tel"
          value={phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone number"
          className="phone-input"
          required
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
      </div>
    </OnboardContainer>
  );
};

export default Signup;
