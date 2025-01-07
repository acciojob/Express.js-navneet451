
const express = require('express');
const app = express();
app.use(express.json());

// Define the routes and implement the CRUD operations for the books collection
let books = [
  {
    id:"1a",
    title:"own your body",
    author:"shiv sarin",
    publication_year:2023,
  },
  {
    id:"1b",
    title:"own your body2",
    author:"shiv sarin arora",
    publication_year:2022,
  },
  {
    id:"1c",
    title:"kill your fear",
    author:"john deo",
    publication_year:2000,
  },
  {
    id:"1d",
    title:"a girl on beach",
    author:"james will",
    publication_year:1989,
  },
]

app.get("/books",(req,res)=>{
  res.json({books});
})
app.get("/books/:id",(req,res)=>{
  const {id}=req.params;
  let filteredBook=books.filter((book)=>book.id===id);
  res.json({filteredBook});
})
app.post("/books",(req,res)=>{
  let {id,title,author,publication_year}=req.body;
  books.push({
    id:id,
    title:title,
    author:author,
    publication_year:publication_year,
  })
  res.json({data:"Data added"})
})

app.patch("/books/:id",(req,res)=>{
  let {id}=req.params;
  let {title,author,publication_year}=req.body;
  if(id===books.id){
    books.title=title;
    books.author=author;
    books.publication_year=publication_year;
  }
  res.json({data:"Books Updated"});
})
app.delete("/books/:id",(req,res)=>{
  let {id}=req.params;
  books.filter((book)=>book.id===id);
  res.json({data:"Books deleted"});
})
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});    
