const express = require('express')
const PORT_NUMBER = 3434
const app = express()





app.listen(PORT_NUMBER, (req,res) => {

    console.log(`Todo Application Server Has Been Established ${PORT_NUMBER}`)

})