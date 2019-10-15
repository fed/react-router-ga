import React, { Fragment } from 'react';
import goldenRetrieverImage from './GoldenRetriever.jpg';

export default function GoldenRetriever() {
  return (
    <Fragment>
      <h1>
        Golden Retrievers are awesome <span role="img" aria-label="party popper">🎉</span>
      </h1>
      <img className="App__image" src={goldenRetrieverImage} alt="Golden Retriever" />
    </Fragment>
  );
}
