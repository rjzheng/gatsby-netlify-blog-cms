import React from 'react';
import PropTypes from 'prop-types';
import { TechPostTemplate } from '../../templates/tech-post';

const TechPostPreview = ({ entry, widgetFor }) => (
  <TechPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

TechPostTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default TechPostPreview;
