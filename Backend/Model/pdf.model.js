const mongoose = require("mongoose")

const pdfSchema = mongoose.Schema({
    title:{type:String , required:true},
    files:{type:String , required:true}
},{
    timestamps:true,
    versionKey:false
})

const pdfModel = mongoose.model("pdfUpload" , pdfSchema)

module.exports = {pdfModel}