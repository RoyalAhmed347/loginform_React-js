import React, { useState } from 'react'
import './App.css'
const App = () => {

  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
    phone: ""
  });

  const inputEvent = (e) => {
    const {name, value} = e.target
  

    setData((preData) =>{
      return{
        ...preData,
        [name]: value
      }
    })
  }
  const submit = (e) => {
    e.preventDefault();

    if (data.name === "") {
      alert("Name can't empty")
    } else if(data.password === ""){
      alert("Password can't empty")
    }
     else if(data.email === ""){
      alert("Email can't empty")
    }
     else if(data.phone === ""){
      alert("Phone Number can't empty")
    } else{
      alert('Submited')
    }
  }
  return (
    <>
      <div className='main'>
        <form onSubmit={submit}>
          <h1>Hello {data.name}</h1>
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <input autoComplete='off' value={data.name} name='name' onChange={inputEvent} type='text' placeholder='Enter Your First Name'/>
          <input autoComplete='off' value={data.password} name='password' onChange={inputEvent} type='password' placeholder='Enter Your Password'/>
          <input autoComplete='off' value={data.email} name='email' onChange={inputEvent} type='email' placeholder='Enter Your Email'/>
          <input autoComplete='off' value={data.phone} name='phone' onChange={inputEvent} type='number' placeholder='Enter Your Phone Number'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App