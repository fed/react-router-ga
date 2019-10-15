import React, { Fragment } from 'react';
import sharPeiImage from './SharPei.jpg';

export default function SharPei() {
  return (
    <Fragment>
      <h1>
        Chinese Shar-Peis are hip <span role="img" aria-label="smiling face with heart-shaped eyes">😍</span>
      </h1>
      <img className="App__image" src={sharPeiImage} alt="Shar Pei" />
    </Fragment>
  );
}
