import React from 'react';
import bulbIcon from 'assets/bulb.svg';
import logoutIcon from 'assets/logout.svg';
import penIcon from 'assets/pen.svg';
import twitterIcon from 'assets/twitter.svg';
import ButtonIcon from 'components/atoms/Buttonicon/Buttonicon';

const Sidebar = () => (
  <div>
    <p>logo</p>
    <div>
      <ButtonIcon icon={penIcon} />
      <ButtonIcon icon={twitterIcon} />
      <ButtonIcon icon={bulbIcon} />
      <ButtonIcon icon={logoutIcon} />
    </div>
  </div>
);

export default Sidebar;
