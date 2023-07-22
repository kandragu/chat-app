import React, { useState } from 'react';

import OnboardContainer from '../onboard/Onboard';

const SignupSMS = () => {
  const [smsCode, setSmsCode] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSmsCode(event.target.value);
  };

  const handleOnNext = () => {
    console.log('on next');
  };

  console.log('smsCode', smsCode);

  return (
    <OnboardContainer
      nextpage="/signupname"
      title="+1 310-481-4739"
      onNext={handleOnNext}
      disableNext={smsCode !== '1234'}
    >
      <div className="sms-container">
        <h2 className="sub-title">We have sent you an SMS with the code</h2>
        <input
          type="number"
          value={smsCode}
          onChange={handleInputChange}
          placeholder="Code"
          className="sms-input"
          required
        />
      </div>
    </OnboardContainer>
  );
};

export default SignupSMS;
