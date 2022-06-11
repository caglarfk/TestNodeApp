//const { router } = require("express")
import express from "express";
//const express = require("express");
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import Users from "./model/users.js";
import Lessons from "./model/lessons.js";
import Stamps from "./model/stamps.js";
import news from "./model/news.js";
import Çaki from "./model/çaki.js";
import Kargis from './model/kargis.js';
import Tests from "./model/tests.js";



mongoose.connect("mongodb://localhost/course");
const db = mongoose.connection;
db.on("error",console.error.bind(console,"hata oluştu"));
db.once("open",()=>{
    console.log("connectionok");
});
const urlencodedParser = bodyParser.urlencoded({
    extended:false 
}); 

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));//sonradan eklendi
app.listen(5000,()=>{
    console.log("server 5000 portunda çalıştı");
});


app.get("/",(req,res)=>{
    console.log("/path");
    /* res.send("welcome my app") */
    res.status(200);
    //res.sendFile(__dirname+"/index.html");
    res.sendFile("index.html"); // sonradan eklendi
});
app.get("/about",(req,res)=>{
    let aboutArray = {
        name:"Kurs Programı",
        content : " Node JS",
        range : "2021-10-01 2022-03-30"
    };
    res.json(aboutArray);
});
app.get("/search-tests",(req,res)=>{
    let query = {
        lessons2:req.query.lessons2
    }
    Tests.find(query,(err,tests)=>{
        if (err) {
            console.log(err);
        }
        else {
            res.send(tests);
        }

    });
})
app.post("/les",urlencodedParser,(req,res)=>{
    console.log(req.body);
    let test1={
        lessons1:req.body.lessons1,
        lessons2:req.body.lessons2
    }
    const test2= new Tests(test1);
    test2.save((err,test2)=>{
        if(err){
            console.log(err);
        }
        else {
            res.send(test2)
        }
    });
})
app.post("/family",urlencodedParser,(req,res)=>{
    console.log(req.body);
    let fam={
        father:req.body.father,
        mother:req.body.mother
    }
    const kar= new Kargis(fam);
    kar.save((err,kar)=>{
        if(err){
            console.log(err);
        }
            else {
                res.send(kar)
            }
        
    });
})
app.post("/postdata",urlencodedParser,(req,res)=>{
    
    
    console.log(req.body);
    let userData = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }
const user = new Users(userData);
user.save((err,user)=>{
    if(err){
        console.log(err)
    }
    else{
        res.send(user)
    }
});

});
app.post("/datapost",(req,res)=>{
    let useData = {
        lesson : req.body.lesson,
        lessonTeacher : req.body.lessonTeacher,
        
    }
const les = new Lessons(useData);
les.save((err,les)=>{
    if(err){
        console.log(err)
    }
    else{
        res.send(les)
    }
});

});
app.get("/search-user",(req,res)=>{
    let query={
        name:req.query.name
    }
    Users.find(query,(err,users)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(users);
        }

    });
});

app.post("/stamppost",(req,res)=>{
    let deneyData = {
        stampName : req.body.stampName,
        stampYear : req.body.stampYear,
        stampPrice : req.body.stampPrice
        
    }
const pul = new Stamps(deneyData);
pul.save((err,pul)=>{
    if(err){
        console.log(err)
    }
    else{
        res.send(pul)
    }
});

});
app.get("/search",(req,res)=>{
    let sorgu={
        stampYear:req.query.stampYear
    }
    Stamps.find(sorgu,(err,pul)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(pul);
        }

    });
});
app.post("/signup",(req,res)=>{
   
    let newUserData = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }
const newUser = new NewUsers(newUserData);
newUser.save((err,user)=>{
    if(err){
        console.log(err)
    }
    else{
        res.send(newUser)
    }
});
});
app.post("/newsSave",(req,res,next)=>{
    console.log(req.body)
    let getData = {
        title :req.body.title,
        description :req.body.description,
        author : req.body.author 
    }
    const registeredNews = new news(getData);
    registeredNews.save((err,item)=>{
        if(err){
            next(err);
        }
        else{
            res.send(item);
        }
    });
    });
 app.get("/newsList",(req,res,next)=>{
    news.find({},function(err,result){
        if(err){next(err);}
        else{
            res.send(result)
        }}
        );   
 });
 app.post("/adminData",urlencodedParser,(req,res)=>{
    
    
    console.log(req.body);
    let çakiData = {
        name : req.body.name,
        surname : req.body.surname,
        password : req.body.password
    }
const çaki = new Çaki(çakiData);
çaki.save((err,user)=>{
    if(err){
        console.log(err)
    }
    else{
        res.send(çaki)
    }
});

});
