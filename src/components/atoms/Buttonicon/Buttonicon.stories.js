import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/bulb.svg';
import logoutIcon from 'assets/logout.svg';
import penIcon from 'assets/pen.svg';
import plusIcon from 'assets/plus.svg';
import twitterIcon from 'assets/twitter.svg';
import Buttonicon from './Buttonicon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: hsl(49, 100%, 58%);
`;

export default {
  title: 'Atoms/Buttonicon',
  decorators: [story => <YellowBackground>{story()}</YellowBackground>],
};

export const Bulb = () => <Buttonicon icon={bulbIcon} />;
export const Active = () => <Buttonicon active icon={bulbIcon} />;
export const Logout = () => <Buttonicon icon={logoutIcon} />;
export const Pen = () => <Buttonicon icon={penIcon} />;
export const Plus = () => <Buttonicon icon={plusIcon} />;
export const Twitter = () => <Buttonicon icon={twitterIcon} />;
