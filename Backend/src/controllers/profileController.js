const User = require("../models/userModel");

const userProfile = async (req, res) => {
    try {
        const userId = req.user.userId;

        const userDetails = await User.findById(userId).select("-password");

        if (!userDetails) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        console.log("========= USER DETAILS =========>", userDetails);

        res.status(200).json({
            message: "Profile fetched successfully",
            userDetails
        });

    } catch (error) {
        console.log("Profile Error =>", error);

        res.status(500).json({
            message: "Failed to fetch profile"
        });
    }
};

module.exports = userProfile;