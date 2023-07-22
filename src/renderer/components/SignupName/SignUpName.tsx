import React, { useState } from 'react';

import OnboardContainer from '../onboard/Onboard';

const SignupName = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleOnNext = () => {
    console.log('on next');
  };

  return (
    <OnboardContainer
      nextpage="/chat"
      title="What is your Full Name?"
      onNext={handleOnNext}
    >
      <div className="name-container">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          className="name-input"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          placeholder="Last Name"
          className="name-input"
          required
        />
      </div>
    </OnboardContainer>
  );
};

export default SignupName;
