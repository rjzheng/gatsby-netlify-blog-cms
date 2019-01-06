import React from 'react';
import PropTypes from 'prop-types';
import { ChallengePostTemplate } from '../../templates/challenge-post';

const ChallengePostPreview = ({ entry, widgetFor }) => (
  <ChallengePostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

ChallengePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ChallengePostPreview;
