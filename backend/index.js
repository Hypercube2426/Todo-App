const express = require('express');
const app = express();
const {createTodo} = require("./types")

app.use(express.json());

app.post('/todo', function (req, res) {
    const createpayload = req.body;
    const parsedPayload = createTodo.safeParse(createpayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
})
//put it in mongodb
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
