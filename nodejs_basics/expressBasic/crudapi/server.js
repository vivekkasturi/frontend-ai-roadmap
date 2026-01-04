import { ValidationError, NotFoundError } from './error.js';
import express from 'express';

const app = express();
const PORT = 5001;
app.use(express.json());

// default user details
const userDetails= [{
    "id": 1,
    "name": "Vivek",
},{
    "id": 2,
    "name": "Ram",
},
{
    "id": 3,
    "name": "Uma",
}]


// all the users
app.get("/users", (req, res)=>{
    
        res.json(userDetails);

})

// get by id
app.get("/user/:id", (req, res)=>{

    const selectedUser = userDetails.find((u)=>(u.id==req.params.id))
     if (!selectedUser) return res.status(404).json({ message: "User not found" });
     res.json(selectedUser);

})
// delete

app.delete("/user/:id", (req, res)=>{
    

    console.log('delete the user details' )

    const deleteUser = userDetails.filter((u)=>u.id!==req.params.id)
    if(!deleteUser) return new  NotFoundError("user id not found")
res.json(deleteUser)
    
})

// CREATE
app.post("/user", (req, res,next) => {

try{
    if(!req.body.name || req.body.name===" "){
        throw new ValidationError("Name is required")
    }
    const newUser = {
        id: Date.now(),
        name: req.body.name
      };
    
  
      userDetails.push(newUser);
      res.status(201).json(newUser);
}catch(error){
    next(error);
}
    
  });

  // UPDATE
app.put("/user/:id", (req, res,next)=>{

    try{


        const putUserDetails = userDetails.find((u)=> u.id==req.params.id)

    putUserDetails.name = req.body.name

    if(!putUserDetails) throw  new NotFoundError("wrong data")
        return res.json({message: "user details are updated"}, putUserDetails)

    }catch(error){
        next(error)
    }
    
      
})


// central error
app.use((error, req, res, next)=>{
    console.log(error.message, "error.message")
 
    const status = error.status || 500;

        res.status(status).json({
            success: false,
            status: error.status,
            message: error.message
        })
    
})


  
app.listen(PORT, ()=>{
console.log(`express is running on ${PORT}`)
})