import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Input } from './Input'
import styled from 'styled-components'
import { pdfjs } from 'react-pdf';
import PdfComp from './PdfComp';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

export const GetPdf = () => {
    const [getPdf , SetgetPdf] = useState([])
    const [pdffile , setPdffile] = useState("")
    const getdata = ()=>{
        axios.get("http://localhost:8080/pdf").then((res)=>{
            console.log(res)
            SetgetPdf(res.data)
        })
    }
    useEffect(()=>{
        getdata()
    },[])

    
    console.log(getPdf)
    const showpdf=(pdf)=>{
        // window.open(``,"_black","noreferrer")
        setPdffile(`http://localhost:8080/files/${pdf}`)
    }

  return (
    <>
        <Input getdata={getdata} />
        <br />
        <br />
        <DIV className='uploaded'>
            <h4>Uploaded Pdf:</h4>
            <div className='outer-div'>
                {
                    getPdf?.map((el)=>(
                        <div className="inner-div">
                            <h6>Title:{el.title}</h6>
                            <button className='btn btn-primary' onClick={()=>{showpdf(el.files)}}>Show Pdf</button>
                        </div>
                    ))
                }
            </div>
            <div className='pdf-div'>
                <PdfComp pdffile={pdffile} />

            </div>
        </DIV>
    </>
  )
}

const DIV = styled.div`
    .outer-div{
        margin-top: 5vh;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
    }
    .pdf-div{
        padding:50px;
        background-color: #dedede;
        margin-top: 50px;
    }
`