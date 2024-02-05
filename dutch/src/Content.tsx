import { Link } from "react-router-dom"
import Header from "./components/Header"
import List from "./components/List"
import ResetButton from "./components/ResetButton"
import SurplusAmount from "./components/SurplusAmount"
import TotalAmount from "./components/TotalAmount"
import UnitOfAmount from "./components/UnitOfAmount"
import { useState } from 'react';

const Content = () => {
// 会計金額
const [totalAmount, setTotalAmount] = useState<string>('');
const handleTotalAmountChange = (newTotalAmount: string) => {
  setTotalAmount(newTotalAmount);
};

// 単位
const [selectedUnit, setSelectedUnit] = useState<string>('');
const handleUnitChange = (value: string) => {
  setSelectedUnit(value);
};

// TO DO Listから受け取った値にする
const list = [{id:1, rate:2, count:2},{id:2, rate:1, count:4}]

const totalRate:number = list.map((l)=>l.rate*l.count).reduce((acc,current)=>acc+current,0)

const AmountList = list.map((l)=>Number(totalAmount) * l.rate / totalRate)

  return (
    <>
      <Header/>
      <TotalAmount value={totalAmount} onChange={handleTotalAmountChange}/>
      <UnitOfAmount selectedValue={selectedUnit} onRadioChange={handleUnitChange} />
      <List/>
      <SurplusAmount/>
      {AmountList}
      <ResetButton/>
      <div><Link to="/content">top</Link></div>
    </>
  )
}

export default Content
