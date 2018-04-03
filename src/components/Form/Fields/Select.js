// Select.js
import React from 'react';
import { dripFormField } from 'react-drip-form';

const Select = ({
  input,
  meta,
  children,
  ...props
}) => (
  <div>
    <select
      {...input}
      {...props}
    >
      {children}
    </select>
    {meta.error && meta.touched && meta.dirty &&
      <span style={{ color: 'red' }}>{meta.error}</span>
    }
  </div>
);

export default dripFormField('select')(Select);