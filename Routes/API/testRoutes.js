const db = require('../../models');
const router = require('express').Router();

router.get('/data', (req, res) => {
    db.Test.find({}).then((response) => {
        res.json(response).status(200);
    })
    .catch((err) => console.log(err));

});

module.exports = router;
