// FieldGroup.js
import React from 'react';
import { dripFormGroup } from 'react-drip-form';

const FieldGroup = ({ meta, children, ...props }) => (
  <div {...props}>
    {children}
    {meta.error && meta.touched && meta.dirty &&
      <span style={{ color: 'red' }}>{meta.error}</span>
    }
  </div>
);

export default dripFormGroup()(FieldGroup);