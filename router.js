
const router = require('express').Router()

router.get('/password/', (req, res) => {
    return res.json({ reply: "backend received " + req.query.pswd })
})


module.exports = router