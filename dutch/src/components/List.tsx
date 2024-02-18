import { useState } from "react";
interface ListProps {
  unitAmountList: number[];
  inputAmountRateList: InputSet[]
  handleAmountRateChange: (value: InputSet[]) => void;
}

interface InputSet {
  rate: string;
  amount: string;
  count: string;
}

const List: React.FC<ListProps>  = ({unitAmountList, inputAmountRateList, handleAmountRateChange}) => {
  const [isRate, setIsRate] = useState([false]);

  const handleAddInputSet = () => {
    handleAmountRateChange([...inputAmountRateList, {rate: '', amount:'', count:''}]);
    setIsRate([...isRate, false])
  };

  const handleRemoveInputSet = (index: number) => {
    const newInputValues = [...inputAmountRateList];
    newInputValues.splice(index, 1);
    handleAmountRateChange(newInputValues);
  };

  const handleInputChange = (index: number, field: keyof InputSet, value: string) => {
    const newInputSets = [...inputAmountRateList];
    newInputSets[index][field] = value;
    handleAmountRateChange(newInputSets);
  };


  const toggleMode = (index: number) => {
    if (isRate[index]){
      const newInputSets = [...inputAmountRateList];
      newInputSets[index]['rate'] = '';
      handleAmountRateChange(newInputSets);
    }else{
      const newInputSets = [...inputAmountRateList];
      newInputSets[index]['amount'] = '';
      handleAmountRateChange(newInputSets);
    }
  const newIsRate = [...isRate];
  newIsRate[index] = !newIsRate[index];
    setIsRate(newIsRate);
  };
  return (
    <>
      {inputAmountRateList.map((value, index) => (
        <div className="flex" key={index}>
          <button type="button" onClick={() => handleRemoveInputSet(index)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
          focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600
            dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">-</button>

          <input
            type="text"
            placeholder="役職"
          />
          {isRate[index] && <input
            type="number"
            value={value.rate}
            onChange={(e) => handleInputChange(index, 'rate', e.target.value)}
            placeholder="比率"
          />}
          {!isRate[index] && <input
            type="number"
            value={value.amount}
            onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
            placeholder="金額"
          />}
          <input
            type="number"
            value={value.count}
            onChange={(e) => handleInputChange(index, 'count', e.target.value)}
            placeholder="人数"
          />
          <button type="button" onClick={()=>toggleMode(index)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
          focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600
            dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">切り替え</button>
            <div>{unitAmountList[index]}</div>
        </div>
      ))}
      <button type="button" onClick={handleAddInputSet} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
      font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
        dark:focus:ring-blue-800">+</button>
    </>
  )
}

export default List
