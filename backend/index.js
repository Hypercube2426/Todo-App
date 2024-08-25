const express = require('express');
const app = express();

app.use(express.json());

app.post('/todo', function (req, res) {
    
})
app.get('/todo', function (req, res) {
    
})

app.put('/todo', function (req, res) {
    
})


app.listen(3000, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", 3000);
}); 
// app.get("/",function(req,res){
//     const n = 
// })
