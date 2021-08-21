const Users = require('../../models/users');

const router = require('express').Router();

router.post('/login', async(req, res) => {
    console.log('backend hit');
        console.log('server side', req.body);
        Users.create(req.body)
        .then((room) => {
            console.log("users", users);
            res.json(room).status(201);
        }).catch ((error) => {
            res.status(400).json({message: error})})
          
    }
)

router.delete('/login', async(req, res) => {
        const user = await Users.findById(req.body._id);
        Users.findByIdAndDelete(user).then((user) =>res.json(user))
        .catch ((error) => {
            console.log(error)  
        })
    }
)

module.exports = router;
