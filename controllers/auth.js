const { response } = require("express");

const User = requre('../models/user')
/**
 * What are we going to do?
 * 1.Get user input
 * 2. Validate
 * 3. Save the data
 * 4 input ==> firstName, lastName, email, password
 * request.body ={
 * firstName:"",
 * lastName:",
 * email:"",
 * password:"",}
 * 
 * person = {}
 * person.ride
 * Return
 * -------
 * {
 * message:"",
 * user : user 
 * }
 * try { block of code
 * } catch(exception){
 * //what should happen when error occurs}
 * @param {*} req 
 * @param {*} res 
 */
//const authCtrl = {}
//authCtrl.signup = () => {}

authCtrl.signup = async (req, res) => {
const signup = async (req, res) => {
    const {firstName, lastName, email, password} = request.body;
    const user = User ({firstName, lastName, email, password})
    //user.save() or
   try {
    const newUser = await user.save() 
    response.send({
        message: "User created successfully",
        newUser
    })
} catch (exception) {
    response.status(500).send({error: "Email Already Used"})
}
}
}

authCtrl = {
    signup: value,
    login: value,
}
module.exports = authCtrl


// you don't need a body parser if you use this ==> 'app.use(express.json())'