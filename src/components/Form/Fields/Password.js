// Input.js
import React from 'react';
import { dripFormField } from 'react-drip-form';

const Input = ({ input, meta, ...props }) => (
  <div>
    <input
      {...input}
      {...props}
      type="password"
    />
    {meta.error && meta.touched && meta.dirty &&
      <span style={{ color: 'red' }}>{meta.error}</span>
    }
  </div>
);

export default dripFormField()(Input);