const userModel = require("./user_model");

const user = userModel.getByUserName(1);
console.log(user);
