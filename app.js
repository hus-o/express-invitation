const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path")
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));
app.use(express.static("views"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views/invitation.html'));;
  });

app.post("/card", (req,res) =>{
    res.send(req.body)
    
})

        
app.listen(PORT, () =>{
    console.log(`Listening here: http://localhost:${PORT}`);
})