const users = require('./db/db');

const path = require('path')
const express = require('express')
const app = express()

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post("/getUser", (req, res) => {

    let foundUser = users.find(user => user.id == req.body.id)

    if (foundUser != -1) {
        console.log(foundUser)
        res.send(JSON.stringify(foundUser)).end();
        
        return;
    }
    res.status(404).send({status: "Not found"});
})
app.post("/addUser", (req, res) => {
    const {
        name,
        age
    } = req.body;
    try {
        console.log(name, age);
        users.push({
            
            id: users.length + 1,
            name: name,
            age: age
        });

        res.send({status: "Ok"}).end();
        return;
    } catch {
        res.status(404).send({status: "Unable to add"});
    }
})
app.post("/deleteUser", (req, res) => {
    Array.prototype.remove = function(from, to) {
        var rest = this.slice((to || from) + 1 || this.length);
        this.length = from < 0 ? this.length + from : from;
        return this.push.apply(this, rest);
      };

    let foundUser = users.findIndex(user => user.id == req.body.id)

    if (foundUser != -1) {
        users.remove(foundUser);
        res.send({status: "Ok"}).end();
        
        return;
    }
    res.status(404).send({status: "Not found"});
})

app.get('/getAllUsers', (req, res) => {
    
    res.send(users).end();

})

app.listen(3000)