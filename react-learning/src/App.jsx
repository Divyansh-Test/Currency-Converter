import './App.css'
import { useState, useCallback, useEffect,useRef } from 'react'
import getApi from '../hooks/useWebiste'
import { Display } from "../components"


    export default function App() {
    let [amount,setAmount]=useState(1)
    let [from,fromcur]=useState("usd")
    let [to,tocur]=useState("usd")
    let [ans,convertedcur]=useState(1)
    let [date,changeDate]=useState("latest")
    let curdata=getApi(from,date)
    let dctdata=Object.keys(curdata)
      
    let convert=()=>{
      let fans= (amount*curdata[to]).toFixed(2)
      
      return convertedcur(fans)
    }
      
      
    let Swap=()=>{
      fromcur(to)
      tocur(from)
    }
      
      
      
      return(<div className="flex justify-centre align-centre flex-col mt-30 ml-12">
        <input type="date" onChange={(e)=> changeDate(e.target.value)} placeholder="Select Date" className="absolute left-140 top-45 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 "/>
        <h2 className="text-bold">CURRENCY CONVERTER</h2>
      <Display label="FROM"  vAlue={amount} options={dctdata} too={from} oncurrencyChange={(cur)=>fromcur(cur)} amountChange={(amount)=>setAmount(amount)} />
        <button className="absolute left-1/2 top-75 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 " onClick={Swap} >SWAP</button>
        <Display label="TO" too={to} inputdisabled   options={dctdata} vAlue={ans} oncurrencyChange={(cur)=>tocur(cur)}/  >
        <button onClick={convert} className="absolute left-1/2 top-110 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"> {from} to {to} </button>
      </div>)
    }