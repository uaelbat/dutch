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
          value="option1"
          defaultChecked
          checked={selectedValue === 'option1'}
          onChange={handleRadioChange}
        />
        1000円単位
      </label>

      {/* ラジオボタン2 */}
      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedValue === 'option2'}
          onChange={handleRadioChange}
        />
        500円単位
      </label>

      {/* ラジオボタン3 */}
      <label>
        <input
          type="radio"
          value="option3"
          checked={selectedValue === 'option3'}
          onChange={handleRadioChange}
        />
        100円単位
      </label>
    </div>
  );
};

export default UnitOfAmount;