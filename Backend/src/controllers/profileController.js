const userProfile = async (req, res)=>{
     console.log("====================>", req.user);
    res.status(200).json({
        message: "Profile fetched successfully"
    });
}
module.exports = userProfile