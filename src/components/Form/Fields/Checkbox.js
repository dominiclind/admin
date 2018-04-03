// Checkbox.js
import React from 'react';
import { dripFormField } from 'react-drip-form';

const Checkbox = ({ input, meta, ...props }) => (
  <span>
    <input
      {...input}
      {...props}
      type="checkbox"
    />
    {meta.error && meta.touched && meta.dirty &&
      <span style={{ color: 'red' }}>{meta.error}</span>
    }
  </span>
);

export default dripFormField('checkbox')(Checkbox);