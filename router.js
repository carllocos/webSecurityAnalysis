
const router = require('express').Router()
const fs = require('fs');
const imgPath = __dirname + "/public/jsflow/example2_guest_joke.html";

router.get('/password/', (req, res) => {
    console.log("received password " + req.query.pswd);
    return res.json({ reply: "backend received " + req.query.pswd })
})

router.get('/joke/', (req, res) => {
    //joke reference https://www.reddit.com/r/ProgrammerHumor/comments/3rni5r/command_line_russian_roulette/
    var title = "how programmers play russian roulette"
    if(!!req.query.usn){
        title = "Hey " + req.query.usn + " do you know how programmers play russian roulette?";
    }
    var joke = "[ $[$RANDOM % 6]==0] && rm -rf / || echo *Click*"
    return res.json({ title: title, joke: joke })
})


router.get('/image/joke/', (req, res) => {
    //joke reference https://www.reddit.com/r/ProgrammerHumor/comments/3rni5r/command_line_russian_roulette/
    if(!!req.query.email){
        console.log("Got your email " + req.query.email);
    }

    const img = fs.readFileSync(imgPath, { encoding: 'utf8' });
    return res.send(img);
})

module.exports = router