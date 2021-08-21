const router = require('express').Router();

const Room = require('../../models/room');

router.get('/getallrooms', async(req, res) => {
    console.log('backend hit');
    try{
        const rooms = await Room.find({});
        console.log(rooms)
         res.json(rooms);
    } catch (error) {
         res.status(400).json({message: error});
    }
})

module.exports = router;
