var express = require("express");
var app = express();

// Visiting "/" should print "Hi there, welcome to my assignment!"

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

//Visting "speak/:animalName" should print the appropriate animal "Sound"

app.get("/speak/:animalName", function(req, res){
    var animalSound = "The " + req.params.animalName + " says ";
    if(req.params.animalName === "pig"){
        animalSound += "'Oink'!";
        res.send(animalSound);
    } else if(req.params.animalName === "cow"){
        animalSound += "'Moo'!";
        res.send(animalSound);
    } else if(req.params.animalName === "dog"){
        animalSound += "'Woof Woof'!";
        res.send(animalSound);
    } else if(req.params.animalName === "cat"){
        animalSound += "'Meow'!";
        res.send(animalSound);
    } else if(req.params.animalName === "duck"){
        animalSound += "'Quack'!";
        res.send(animalSound);
    } else {
        res.send("Sorry we don't know the sound of a " + req.params.animalName + ".");
    }
});

//Visiting "/repeat/:word/:times" prints "word" x times

app.get("/repeat/:word/:times", function(req, res){
    var output = "";
    
    for( var i = 0; i < Number(req.params.times); i++){
        output += req.params.word + " ";
    }
    
    res.send(output);
    
});

//Catch all other pages and return something
app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});