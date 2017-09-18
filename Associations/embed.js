var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST MODEL - title, content

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

//USER MODEL - email, name

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);



var Post= mongoose.model("Post", postSchema);

// var newUser = new User({
//   email: "hermione@hogwarts.edu",
//   name: "Hermione Grainger"
// });

// newUser.posts.push({
//     title: "How to brew polyjuice potion",
//     content: "Just kidding. Go to potions class."
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });


// var newPost = new Post({
//     title: "Relfections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

User.findOne({ name: "Hermione Grainger"}, function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
        user.posts.push({
            title: "Three things I really hate!",
            content: "Voldermort, Voldermort, Voldermort"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});