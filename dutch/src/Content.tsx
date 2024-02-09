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
const [totalAmount, setTotalAmount] = useState<string>('50150');
const handleTotalAmountChange = (newTotalAmount: string) => {
  setTotalAmount(newTotalAmount);
};

// 単位
const [selectedUnit, setSelectedUnit] = useState<string>('1000');
const handleUnitChange = (value: string) => {
  setSelectedUnit(value);
};

// TO DO Listから受け取った値にする
const list = [{id:1, rate:2, count:2, amount:0},
  {id:2, rate:1, count:4, amount:0},
  {id:3, rate:0, count:1, amount:10000}];

const remainingAmount:number = Number(totalAmount) - list.map((l)=>l.amount).reduce((acc,current)=>acc+current,0)

const totalRate:number = list.map((l)=>l.rate*l.count).reduce((acc,current)=>acc+current,0)

const amountList = list.map((l)=> ({value: remainingAmount * l.rate / totalRate, count: l.count}))

const unitAmountList = amountList.map((al)=>
(al.value % Number(selectedUnit)) < Number(selectedUnit)/2
? al.value - al.value % Number(selectedUnit)
: al.value + Number(selectedUnit) - al.value % Number(selectedUnit));

const surplusAmountList = amountList.map((al)=>
(al.value % Number(selectedUnit)) < Number(selectedUnit)/2
?(al.value % Number(selectedUnit)) * al.count
:(Number(selectedUnit) -  al.value % Number(selectedUnit)) * al.count);

// const surplusAmountList = list.map((l)=>remainingAmount * l.rate * l.count / totalRate).map((al) => al % Number(selectedUnit))
  return (
    <>
      <Header/>
      <TotalAmount value={totalAmount} onChange={handleTotalAmountChange}/>
      <UnitOfAmount selectedValue={selectedUnit} onRadioChange={handleUnitChange} />
      <List/>
      <div>{unitAmountList[0]}</div>
      <div>{unitAmountList[1]}</div>
      <div>{unitAmountList[2]}</div>
      <SurplusAmount/>
      <div>{surplusAmountList.reduce((acc,current)=>acc+current,0)}</div>
      <ResetButton/>
      <div><Link to="/content">top</Link></div>
    </>
  )
}

export default Content
