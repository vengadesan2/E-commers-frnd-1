import React from 'react'
import AxiosService from '../utils/AxiosService'
function data() {
  const paymentData ={
    "amount": "100",
    "shipping":{
      "name":"vengat",
      "address":{
         "city":"chennai",
         "postal_code":"1234567",
         "country":"aland",
         "state":"tamilnadu"
      },
      "phone":"1234567890"
    }
   
   
   }
  const data = async()=>{

    const {data} = await AxiosService.post('', paymentData)
    console.log(data);
    
    if(res.status===200){
        console.log(data.amount);
    }
  
  }
  return <>
  <h1>heloow</h1>
     <button onClick={()=>{
      data()
  }}>
      data
  </button>
  </> 
}

export default data