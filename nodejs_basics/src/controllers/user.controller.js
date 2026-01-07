const User = require("../models/user.models.js");

exports.getUsers = async (req, res, next) =>{
try
   { const userDetails = await User.find();

    return res.json(userDetails);

}
catch(error){
next(error);
}}

exports.getUsersById = async (req, res, next)=>{
    try{
        const user = await User.find(u=>u.id === req.params.id)

        return res.json(user)
    }
    catch(error){
        next(error)
    }
}

exports.createUser = (req, res, next) => {
    try {
      if (!req.body.name || req.body.name.trim() === "")
        throw new ValidationError("Name is required");
  
      const newUser = { id: Date.now(), name: req.body.name };
      User.push(newUser);
  
      res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  };

  exports.deleteUser = (req, res, next) => {
    try {
      User = User.filter(u => u.id != req.params.id);
      res.json({ message: "Deleted" });
    } catch (err) {
      next(err);
    }
  };

  exports.updateUser = (req, res, next) => {
    try {
      const user = User.find(u => u.id == req.params.id);
      if (!user) throw new NotFoundError("User not found");
  
      user.name = req.body.name;
      res.json(user);
    } catch (err) {
      next(err);
    }
  };