const express=require('express');
const userRoute=require('./route/user')
const app=express();
app.use(express.json());

app.use('/api/v1/user',userRoute);

app.listen(3000,function(){
    console.log(`server running on port no `+3000);
});


