import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import PropTypes from 'prop-types';
import Link from 'assets/link.svg';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px 10px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  ${({ flex }) =>
      flex &&
      css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    :first-of-type {
    z-index: 9999;
  }
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  position: absolute;
  right: 20px;
  top: 50px;
  border-radius: 50px;
`;

const StyledLink = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  position: absolute;
  right: 20px;
  top: 50%;
  background: white url(${Link}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  transform: translateY(-50%);
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Nagłówek</StyledHeading>
      <DateInfo>3 days ago</DateInfo>
      {cardType === 'twitter' && (
        <StyledAvatar src="https://avatars.io/twitter/realDonaldTrump/Medium" />
      )}
      {cardType === 'article' && <StyledLink src={Link} />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>oihoqwd qwdoihoiqwdqwd oihoqwd oihqwdoih dchbhbc</Paragraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
