import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



function Main() {
    const [amount,setAmount]=useState(0)
    const [year,setYear]=useState(0)
    const [rate,setRate]=useState(0)
    const [finalamt,setFinalamt]=useState(0)

    // const calculate=(e)=>{
    //     const output = (amount * rate * Math.pow(1 + rate, year)) / (Math.pow(1 + rate, year) - 1);

    //   setFinalamt(output.toFixed(2))

   
    // }

    const calculate = (e) => {
        const monthlyRate = rate / (12 * 100); // Convert annual rate to monthly rate
        const numberOfPayments = year * 12; // Convert years to months
        const output = (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        setFinalamt(output.toFixed(2));
    }
    

    function reset(){
     setAmount(" ")
     setRate(" ")
     setYear("")
     setFinalamt("")
    }

  return (
    <div>
        <div className="box mx-5 my-5" style={{textAlign:'center'}}>
        <div className="header">
          <h1 style={{color:'DarkSlateBlue',fontSize:'50px',fontWeight:'bold',textShadow: '1px 1px 2px gray'}}>EMI Calculator</h1>
          <p style={{color:'DarkSlateBlue'}}>Calculate your EMI, plan your future, and pave the way to financial freedom.</p>
          </div>

          <div className="row" >
            <div className="col-lg-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HsVddNyF_8xAvaO4d049RogTonKLMz1HKg&usqp=CAU" alt="" style={{width:"300px",height:"350px"}} />
            </div>
            <div className="col-lg-4"  style={{backgroundColor:'SteelBlue',borderRadius:'20px 20px 20px',alignItems:'center',textAlign:'center',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)'}}>
              <div className="form my-2">
              <TextField  onChange={(e=>setAmount(e.target.value))} value={amount || ""} style={{color:'white'}} className='mt-3' id="outlined-basic" label="Amount" variant="outlined" />
              <TextField onChange={(e=>setYear(e.target.value))} value={year || ""} style={{color:'white'}} className='mt-3' id="outlined-basic" label="Year" variant="outlined" />
              <TextField onChange={(e=>setRate(e.target.value))} value={rate || ""} style={{color:'white'}} className='mt-3' id="outlined-basic" label="Rate" variant="outlined" />

              
              <div className=" col-lg-3 save mt-4 mx-5" style={{backgroundColor:'LightSteelBlue',borderRadius:'20px 20px 20px',width:'250px',textAlign:'center',color:'azure',boxShadow:' inset 2px 2px 10px rgba(255,255,255,.1), inset -5px -8px 8px rgba(0,0,0,.2)'}}>
                
                  <h3>Total Pay</h3>
                  <h3>&#8377; {finalamt} </h3>
                  </div>
                  <Button  className='mt-3 mx-3' onClick={calculate} variant="contained">Run</Button>
                  <Button  className='mt-3 ' style={{backgroundColor:"crimson"}} onClick={reset} variant="contained">Reset</Button>
              </div>

            </div>



    </div>
     </div>     






   </div>   
      
    
  )
}

export default Main













 