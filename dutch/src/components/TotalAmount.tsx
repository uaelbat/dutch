interface TotalAmountInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

const TotalAmount: React.FC<TotalAmountInputProps>  = ({ value, onChange }) => {
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