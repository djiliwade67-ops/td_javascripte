const express = require("express");
const qrcode = require("qrcode");

const app = express()
app.use(express.static("public"));

app.get('/api/qr', async (req, res) => {
   const url = req.query.lien;
    let qrimage = await qrcode.toDataURL(url)
    res.json({qr : qrimage})
})

app.listen(8000, ()=>{
    console.log("le serveur est en marche");
}); 

