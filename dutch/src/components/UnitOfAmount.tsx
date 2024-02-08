import React, { useState } from 'react';

interface RadioButtonsProps {
  selectedValue: string;
  onRadioChange: (value: string) => void;
}

const UnitOfAmount: React.FC<RadioButtonsProps> = ({ selectedValue, onRadioChange }) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onRadioChange(event.target.value);
  };
  return (
    <div>
      {/* ラジオボタン1 */}
      <label>
        <input
          type="radio"
          value="1000"
          checked={selectedValue === '1000'}
          onChange={handleRadioChange}
        />
        1000円単位
      </label>

      {/* ラジオボタン2 */}
      <label>
        <input
          type="radio"
          value="500"
          checked={selectedValue === '500'}
          onChange={handleRadioChange}
        />
        500円単位
      </label>

      {/* ラジオボタン3 */}
      <label>
        <input
          type="radio"
          value="100"
          checked={selectedValue === '100'}
          onChange={handleRadioChange}
        />
        100円単位
      </label>
    </div>
  );
};

export default UnitOfAmount;