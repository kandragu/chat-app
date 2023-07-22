import React, { useState, FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import './Onboard.scss';

import singupIcon from '../../../../assets/signup.png';

type OnboardContainerProps = {
  title: string;
  onNext: () => void;
  children: ReactNode;
  nextpage: string;
  disableNext?: boolean;
};

const OnboardContainer: FC<OnboardContainerProps> = ({
  title,
  onNext,
  nextpage,
  children,
  disableNext = false,
}) => {
  return (
    <div className="signup-container">
      <img width="200" alt="icon" src={singupIcon} />
      <h1 className="title">{title}</h1>
      {children}

      {disableNext ? (
        <button disabled className="next-button-disable">
          Next
        </button>
      ) : (
        <Link to={nextpage} className="link">
          <button onClick={onNext} className="next-button">
            Next
          </button>
        </Link>
      )}
    </div>
  );
};

export default OnboardContainer;
