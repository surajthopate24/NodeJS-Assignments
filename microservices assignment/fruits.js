const express = require('express');
const bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const port = 8081;
const app = express();

app.use(bodyParser.json());
require("./fruit")
const Fruit = mongoose.model("Fruit")

//connect
mongoose.connect(`mongodb+srv://giri:12345@cluster0.qlr0y.mongodb.net/fruitsInventory?retryWrites=true&w=majority`,()=>{
    console.log("database is connected");
})

app.get('/',(req,res)=>{
    res.send("this our get request");
})


//handling post request as follows
app.post('/fruit',(req,res)=>{
    var newFruit = {
        name:req.body.name,
        quantity:req.body.quantity
    }
     // create a new book
    var fruit = new Fruit(newFruit)

    fruit.save().then(()=>{
        console.log("new fruit is created");
    }).catch((err)=>{
        if(err) throw err;
    })
   res.send(" new fruit created successfully");
})

app.get("/inventory",(req,res)=>{
    Fruit.find().then((fruits)=>{
        res.json(fruits);
    }).catch(err =>{
        if(err) {
             throw err; }
            })
    })

    app.get("/inventory/:id",(req,res)=>{
               Fruit.findById(req.params.id).then((fruit)=>{
                  if(fruit){
                      res.json(fruit);
                    }else {
                        res.sendStatus(404);
                    }
                }).catch(err=>{
                    if(err){
                        throw err;
                    }
                })
               })
               
               //handing put request as follows
               app.put("/inventory/:id",(req,res)=>{
                Fruit.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
                    res.send("fruit updated successfully");
                }).catch(err=>{
                 if(err){
                     throw err;
                 }
             })
            })

     //handling delete request as follows
      app.delete("/inventory/:id",(req,res)=>{
                Fruit.findByIdAndRemove(req.params.id).then(()=>{
                    res.send("fruit removed successfully");
                }).catch(err=>{
                 if(err){
                     throw err;
                 }
             })
            })

app.listen(port,()=>{
    console.log(`successfully run on the port : ${port} `);
})
