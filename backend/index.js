const express = require('express');
const app = express();
const {createTodo, updateTodo} = require("./types")

app.use(express.json());

app.post('/todo',async function (req, res) {
    const createpayload = req.body;
    const parsedPayload = createTodo.safeParse(createpayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
    //put it in mongodb
    await todo.create({
        title:createpayload.title,
        description:createpayload.description,
        completed:false

    })
    res.json({msg:"Todo created"})

})

//creating mongodb schema
//putting, updating , getting something in mongo db

app.get('/todos',async function (req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    })
    
})

app.put('/todo',async function (req, res) { 
    const updatepayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatepayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
        })
    
    res.json({
        msg:"todo marked as completed"
    })
})


app.listen(3000, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", 3000);
}); 
// app.get("/",function(req,res){
//     const n = 
// })
