
const router = require('express').Router()

router.get('/password/', (req, res) => {
    console.log("received password " + req.query.pswd);
    return res.json({ reply: "backend received " + req.query.pswd })
})

router.get('/joke/', (req, res) => {
    //joke reference https://www.reddit.com/r/ProgrammerHumor/comments/3rni5r/command_line_russian_roulette/
    var title= "how programmers play russian roulette"
    var joke = "[ $[$RANDOM % 6]==0] && rm -rf / || echo *Click*"
    return res.json({ title: title, joke: joke })
})


module.exports = router