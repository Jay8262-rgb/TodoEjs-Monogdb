const express = require('express');
const http = require('http').Server(app);
const bodyParser = require('body-parser');
var app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const mongoose = require("mongoose");
// const { name } = require('ejs');
mongoose.connect("mongodb+srv://jk825405jay_db_user:Qp_vqU5QDGisaCR@cluster0.qduspak.mongodb.net/?appName=Cluster0")
.then(() => {
  console.log("MongoDB atlas connected");

  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
})
.catch(err => console.log(err));
const tryschema = new mongoose.Schema({
    name: String,
    priority: String,
    color: String,
    font:String,
    HighlightColor: String
});

const item = mongoose.model("task", tryschema);
const todo = new item({
    name: "create a video" ,
    priority: "low"
}); 

app.get("/", async function(req, res){
    try{
      const foundItems = await item.find({});
      res.render("list", {ejs : foundItems, showUpdate : false});
    }catch (err){
      console.log(err);
    }
});
app.post("/", async (req, res)=>{
  try{
    const itemName = req.body.ejs1;
  const itemPriority = req.body.priority;
  console.log(itemPriority);
    const todo1 = new item({
      name :  itemName,
      priority : itemPriority
    });
    await todo1.save();
    res.redirect("/");
  }
  catch(err){
    console.log(err);
    res.status(500).send("Error in saving the data");
  }
  
});


app.post("/delete/:id" , async(req, res ) => {
  try{
    const id = req.params.id;
    store = await item.findByIdAndDelete(id);
    console.log("deleted" ,id);
    console.log(store);
    res.redirect("/");
  }
  catch(err){
    console.log(err);
  } 
});
// todo.save();

app.get("/edit/:id", async (req, res) => {
  try{
    const id = req.params.id;
    console.log(id);
    const foundItems = await item.findById(id);
    const allItems = await item.find({});
    // console.log(allItems);
    res.render("list" , {
      ejs: allItems,
      showUpdate: true,
      editValue: foundItems,
      editId: id
    });
    
  }catch(err){
    console.log(err);
  }
    

    
});

app.post("/update/:id" , async (req ,res) => {
  try{
    const id = req.params.id;
    const oldItems = await item.findById(id);

  
   updateItem = await item.findByIdAndUpdate(id, {
    name:  req.body.ejs1 || oldItems.name,
    priority: req.body.priority || oldItems.priority,
    color:req.body.color || oldItems.color,
    font: req.body.font || oldItems.font,
    HighlightColor: req.body.highlight || oldItems.HighlightColor
  });
  res.redirect("/")
  console.log(updateItem);
  }catch(err){
    console.log(err);
  }
  
  
});