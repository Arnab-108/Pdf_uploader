import React, { useState } from 'react'
import axios from "axios"
import styled from "styled-components"
export const Input = () => {
    const [title,setTitle] = useState("")
    const [files, setFile] = useState("")

    const handleClick=(e)=>{
        e.preventDefault()
        const obj={
            title,
            files
        }

        axios.post("http://localhost:8080/pdf/add",obj,{
            headers: {'Content-Type':'multipart/form-data'}
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
        
    }
  return (
    <>
    <DIV>
        <form className='formStyle' onSubmit={handleClick}>
            <h1>Upload Pdf</h1>
            <br />
                <input type="text" className='form-control' placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}} required   />
                <br />
                <input type="file" className='form-control' placeholder='Upload Pdf' accept='application/pdf' onChange={(e)=>{setFile(e.target.files[0])}} required />
                <br />
                <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
    </DIV>
    
    </>
  )
}


const DIV  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    flex-direction: column;

    .formStyle{
        margin-top: 5vh;
        padding: 20px;
        border: 1px solid black;
        width: 35%;
        text-align: center;
    }
    
`

