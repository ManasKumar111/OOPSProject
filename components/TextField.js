import React, { useState } from 'react';

function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} name={name} value={value} onChange={onChange} />
    </div>
  );
}

export default TextField;