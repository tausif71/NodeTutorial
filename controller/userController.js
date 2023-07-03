exports.getUserData=(req,res)=>{
    res.status(200).json({
        "status":"success",
        "data":'Get All Users'
    })
};

exports.CreateNewUser=(req,res)=>{
    res.status(200).json({
        "status":"success",
        "data":'New User'
    })
};

exports.UpdateUser=(req,res)=>{
    res.status(200).json({
        "status":"success",
        "data":'Update User'
    })
};

exports.GetUserById=(req,res)=>{
    res.status(200).json({
        "status":"success",
        "data":'Get User By ID'
    })
};
