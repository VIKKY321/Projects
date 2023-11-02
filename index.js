const express = require('express');
const app=express();
const https = require('https');
const bodyParser = require('body-parser');
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.use(bodyParser.urlencoded({extended:true}));
app.post("/",function(req,res){
      const query=req.body.cityName;
    const apiKey="c14c340175e6ea659e5a60d3d148f3f8&";
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey;

    https.get(url,function(response){
        response.on("data",function(data){
        console.log(JSON.parse(data));
        const weatherdata=JSON.parse(data);
        const temp=weatherdata.main.temp;
        const cloud=weatherdata.sunrise;
        const icon=weatherdata.weather[0].icon;
        const imgURL="https://openweathermap.org/img/wn/10d@2x.png";
        res.write("<h1>the wether temp in "+ query +" is"+ temp +"degree</h1>");
        res.write("<img src="+imgURL+">");
        });
    });
});

app.listen(3000);
