const express = require("express")
const cors = require("cors")
const { connection } = require("./db")
const { pdfRouter } = require("./Routes/pdf.routes")

const app = express()

app.use(express.json())
app.use(cors())
app.use("/files" , express.static('files'))
app.get("/",(req,res)=>{
    res.send("HomePage")
})

app.use("/pdf" , pdfRouter)

app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected to DB")
        console.log("Server running at 8080")
    } catch (error) {
        console.log("Something went wrong")
        console.log(error)
    }
    
})