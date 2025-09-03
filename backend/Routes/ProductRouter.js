const ensureAuthenticated = require('../Middlewers/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "pen",
            price: 10
        },
        {
            name: "computer",
            price: 65000
        }
    ])
});

module.exports = router;