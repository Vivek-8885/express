const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req,res)=> {
  res.json('Hello World')
})


app.get('/name',(req,res)=>{
    res.send(' My name is Vivek');
})

let prod=[
    {
        id:1,
        name:"Redmi"
    },
    {
        id:2,
        name:"Iphone"
    },
    {
        id:3,
        name:"Poco"
    }
]



app.get('/products',(req,res)=>{
    res.send(prod);
    
})

app.get('/products/:id',(req,res)=>{
    const newData=prod.filter(item=>item.id===req.params.id);
    
    return res.json(newData);
    console.log(prod);
    
})


app.post('/post',(req,res)=>{
    const data=req.body;
    prod.push(data);
    res.send(prod);
    console.log(prod);
})

app.delete('/delete/:id',(req,res)=>{
    const del=parseInt(req.params.id);
    prod=prod.filter((product)=>product.id!==del);
    res.send(prod);
    console.log(prod);
})

app.listen(4000,console.log('Server Running'));