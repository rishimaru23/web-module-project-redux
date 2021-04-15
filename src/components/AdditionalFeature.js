import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/carSalesActions';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick = {()=>props.addFeature(props.feature.id)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);
