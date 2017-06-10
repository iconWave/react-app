let express = require('express');
let app = express();
let bodyParser = require("body-parser");
let ad = require('./home/ad');
let list = require('./home/list');


app.use(bodyParser.urlencoded({extended:true }));
//广告的接口

app.get('/api/ad',function(req,res){
    res.send(ad);
});

//
app.get('/api/list/:city/:page',(req,res)=>{

    console.log(req.params.city);
    console.log(req.params.page);
    res.send(list);
});


// 商户详情
let info = require('./detail/info');
// 通过 id 来获取商户信息
app.get('/api/detail/info/:id',(req,res)=>{
    res.send(info);
});

// 评价列表 id,页码 page

let commit = require("./detail/comment");
app.get("/api/detail/comment/:id/:page",(req,res)=>{
    console.log(req.params.id);
    console.log(req.params.page);
    res.send(commit)
});

// 订单列表 订单 id /api/orderList/:id

let orderList = require('./orderlist/orderList');
app.get('/api/orderlist/:username',(req,res)=>{
    res.send(orderList)
});

app.post('/api/comment',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});

app.listen("3000",()=>{
    console.log("server is on 3000 port!");
});


