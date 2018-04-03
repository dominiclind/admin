// Radio.js
import React from 'react';
import { dripFormField } from 'react-drip-form';

const Radio = ({ input, meta, ...props }) => (
  <span>
    <input
      {...input}
      {...props}
      type="radio"
    />
    {meta.error && meta.touched && meta.dirty &&
      <span style={{ color: 'red' }}>{meta.error}</span>
    }
  </span>
);

export default dripFormField('radio')(Radio);