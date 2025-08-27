import {useState} from "react"

function getApi(currency,date){
  let [data,setData]=useState([])
  fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currency}.json`).then((res)=>res.json()).then((res)=>setData(res[currency]))
  return data
}
export default getApi