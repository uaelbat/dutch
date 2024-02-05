import React, { useState } from 'react';

interface TextInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

const TotalAmount: React.FC<TextInputProps>  = ({ value, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <input
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder="会計金額を入力してください"
    />
  )
}

export default TotalAmount