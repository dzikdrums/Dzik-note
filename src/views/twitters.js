import React from 'react';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';

const Twitters = ({ twitters }) => (
  <GridTemplate pageType="twitters">
    {twitters.map(({ title, content, twitterName, created, id }) => (
      <Card
        id={id}
        cardType="twitters"
        title={title}
        content={content}
        twitterName={twitterName}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);

Twitters.propTypes = {
  twitters: PropTypes.object,
};

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);
