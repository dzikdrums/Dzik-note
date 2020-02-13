import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'Theme/GlobalStyle';

function Root() {
  return (
    <div>
      <GlobalStyle />
      <Button>Close/save</Button>
      <Button secondary>Remove</Button>
    </div>
  );
}

export default Root;
