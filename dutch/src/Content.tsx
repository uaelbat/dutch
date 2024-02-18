import { Link } from "react-router-dom"
import List from "./components/List"
import ResetButton from "./components/ResetButton"
import SurplusAmount from "./components/SurplusAmount"
import TotalAmount from "./components/TotalAmount"
import UnitOfAmount from "./components/UnitOfAmount"
import { useState } from 'react';

const Content = () => {
  // TO DO:どこか違うファイルにに置きたい
  interface InputSet {
    rate: string;
    amount: string;
    count: string;
  }
  // 会計金額
  const [totalAmount, setTotalAmount] = useState<string>('50150');
  const handleTotalAmountChange = (newTotalAmount: string) => {
    setTotalAmount(newTotalAmount);
  };

  // 単位
  const [selectedUnit, setSelectedUnit] = useState<string>('1000');
  const handleUnitChange = (value: string) => {
    setSelectedUnit(value);
  };

  const [list, setList] = useState([{rate: 0, amount:0, count:0}]);

  const [inputAmountRateList, setInputAmountRateList] = useState([{rate: '', amount:'', count:''}]);
  const handleAmountRateChange = (value: InputSet[]) => {
    setInputAmountRateList(value);
    const numList = inputAmountRateList.map(obj => {
      const rate = Number(obj.rate) || 0;
      const amount = Number(obj.amount) || 0;
      const count = Number(obj.count) || 0;
      return { rate: rate, amount:amount, count:count };
    });
    setList(numList)
  };

  const remainingAmount:number = Number(totalAmount) - list.map((l)=>l.amount).reduce((acc,current)=>acc+current,0)

  const totalRate:number = list.map((l)=>l.rate*l.count).reduce((acc,current)=>acc+current,0)

  const amountList = list.map((l)=> ({value: totalRate!==0 ? remainingAmount * l.rate / totalRate:0, count: l.count}));

  const unitAmountList = amountList.map((al)=>
  (al.value % Number(selectedUnit)) < Number(selectedUnit)/2
  ? al.value - al.value % Number(selectedUnit)
  : al.value + Number(selectedUnit) - al.value % Number(selectedUnit));

  const surplusAmountList = amountList.map((al)=>
  (al.value % Number(selectedUnit)) < Number(selectedUnit)/2
  ?(al.value % Number(selectedUnit)) * al.count
  :(Number(selectedUnit) -  al.value % Number(selectedUnit)) * al.count);
  return (
    <>
      <TotalAmount value={totalAmount} onChange={handleTotalAmountChange}/>
      <UnitOfAmount selectedValue={selectedUnit} onRadioChange={handleUnitChange} />
      <List unitAmountList={unitAmountList} inputAmountRateList={inputAmountRateList}
       handleAmountRateChange={handleAmountRateChange}/>
      <SurplusAmount/>
      <div>{surplusAmountList.reduce((acc,current)=>acc+current,0)}</div>
      <ResetButton/>
      <div><Link to="/content">top</Link></div>
    </>
  )
}

export default Content
