const express = require("express")

const {upload} = require("../Middleware/uploads.muddleware")
const { ADD, GET } = require("../Controller/pdf.controller")
const pdfRouter = express.Router()

pdfRouter.post("/add" , upload.single('files'),ADD)
pdfRouter.get("/" , GET)

module.exports = {pdfRouter}