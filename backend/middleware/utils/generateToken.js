const jwt=require("jsonwebtoken")

module.exports.generateToken = async(id) => {
    console.log(id);
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
