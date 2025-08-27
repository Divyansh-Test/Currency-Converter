function Display({
  label="",
  oncurrencyChange,
  too,
  amountChange,
  convertedcurrency="",
  inputdisabled=false,
  options=[],
  vAlue
  
  
}){
  return (
    <div className=" justify-centre align-centre flex flex-row  bg-red-100 gap-50 w-100 rounded-md mx-80 mt-5 overflow-hidden p-15px">
      <div className="flex flex-col m-10 ">
      <label className="mb-1">
        
        {label}
      </label>
      <input type="number" step="0.01" onChange={(e)=> amountChange && amountChange(e.target.value)} disabled={inputdisabled} value={vAlue} className="  bg-white w-10" />
      </div>
        <select className=" mt-10  w-50 h-10 bg-white rounded-md " value={too} onChange={(e)=> oncurrencyChange && oncurrencyChange(e.target.value)}>
          {options.map((cur)=>(<option key={cur} value={cur} >{cur}</option>))}
        </select>

      
      
    </div>
  )
  
}
export default Display