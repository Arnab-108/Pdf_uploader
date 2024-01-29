const {pdfModel} = require("../Model/pdf.model")

const ADD = async(req,res)=>{
    try {
        let pdf = new pdfModel({
            title: req.body.title,
            files: req.file.filename
        })

        await pdf.save()
        res.status(200).send({msg:"Uploaded Successfully" , pdf:pdf})
    } catch (error) {
        res.status(404).send({err:error})
    }
}

const GET = async(req,res)=>{
    try {
        const data = await pdfModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send({err:error})
    }
}
module.exports = {ADD , GET}