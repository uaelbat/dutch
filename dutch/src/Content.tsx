import { Link } from "react-router-dom"
import Header from "./components/Header"
import List from "./components/List"
import ResetButton from "./components/ResetButton"
import SurplusAmount from "./components/SurplusAmount"
import TotalAmount from "./components/TotalAmount"
import UnitOfAmount from "./components/UnitOfAmount"
import { useState } from 'react';

// 会計金額
const [text, setText] = useState<string>('');
const handleTextChange = (newText: string) => {
  setText(newText);
};

// 単位
const [selectedValue, setSelectedValue] = useState<string>('');
const handleRadioChange = (value: string) => {
  setSelectedValue(value);
};

const Content = () => {
  return (
    <>
      <Header/>
      <TotalAmount value={text} onChange={handleTextChange}/>
      <UnitOfAmount selectedValue={selectedValue} onRadioChange={handleRadioChange} />
      <List/>
      <SurplusAmount/>
      <ResetButton/>
      <div><Link to="/content">top</Link></div>
    </>
  )
}

export default Content
