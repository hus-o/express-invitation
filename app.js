const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));
app.use(express.static("views"));

app.listen(PORT, () =>{
    console.log(`Listening here: http://localhost:${PORT}`);
})