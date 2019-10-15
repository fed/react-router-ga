import React, { Fragment } from 'react';
import germanShepherdImage from './GermanShepherd.jpg';

export default function GermanShepherd() {
  return (
    <Fragment>
      <h1>
        German Shepherds are rad <span role="img" aria-label="face with starry eyes">🤩</span>
      </h1>
      <img className="App__image" src={germanShepherdImage} alt="German Shepherd" />
    </Fragment>
  );
}
