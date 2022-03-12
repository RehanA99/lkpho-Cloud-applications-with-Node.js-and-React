const express = require('express');
const app = new express();

let loginDetails = [];
var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December" ] ;
app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

app.get("/fetch/:num", (req, res) => {
	var monthNum = parseInt(req.params.num) ;
	if(monthNum < 1 || monthNum > 12) {
		throw new Error("Enter a valid number") ;
	} 
	else {
	res.send("This is " + months[monthNum-1] ) 
	}
})
app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

