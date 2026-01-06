const { ValidationError, NotFoundError } = require("../errors/appErrors");

let users = [
  { id: 1, name: "Vivek" },
  { id: 2, name: "Ram" },
  { id: 3, name: "Uma" }
];

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.getUserById = (req, res, next) => {
  try {
    const user = users.find(u => u.id == req.params.id);
    if (!user) throw new NotFoundError("User not found");

    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.createUser = (req, res, next) => {
  try {
    if (!req.body.name || req.body.name.trim() === "")
      throw new ValidationError("Name is required");

    const newUser = { id: Date.now(), name: req.body.name };
    users.push(newUser);

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = (req, res, next) => {
  try {
    users = users.filter(u => u.id != req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};

exports.updateUser = (req, res, next) => {
  try {
    const user = users.find(u => u.id == req.params.id);
    if (!user) throw new NotFoundError("User not found");

    user.name = req.body.name;
    res.json(user);
  } catch (err) {
    next(err);
  }
};
