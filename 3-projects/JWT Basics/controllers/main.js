//?? check username, password in post(login) request
//?? if exist create new JWT
//?? send back to frontend
//?? setup authentication so only the request with JWT can access the dashboard


const jwt = require('jsonwebtoken')
const CustomAPIError = require("../errors/custom-error");



const login = async (req, res) => {
    const {username, password} = req.body
    
    //! mongo
    //! Joi
    //!  check in the controller

    if(!username || !password ){
        throw new CustomAPIError('Please provide email and password',400)
    }

    const id = new Date().getDate()

//! try to keep payload small, better experience for user    
    const token = jwt.sign({id, username},process.env.JWT_SECRET)

    res.send("Fake Login/ Register/ Signup");
  };
  
  const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res
      .status(200)
      .json({
        msg: `Hello, Engin`,
        secret: `Here is your authorized data, your lucky number ${luckyNumber}`,
      });
  };
  
  module.exports = { login, dashboard };