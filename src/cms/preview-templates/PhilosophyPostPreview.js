import React from 'react';
import PropTypes from 'prop-types';
import { PhilosophyPostTemplate } from '../../templates/philosophy-post';

const PhilosophyPostPreview = ({ entry, widgetFor }) => (
  <PhilosophyPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

PhilosophyPostTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default PhilosophyPostPreview;
