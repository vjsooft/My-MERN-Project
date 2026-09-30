const authMiddleware = async (req, res, next) => {
    try {

        console.log("COOKIES =>", req.cookies);

        const token = req.cookies.token;

        console.log("TOKEN =>", token);

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log("DECODED =>", decoded);

        req.user = decoded;

        next();

    } catch (error) {

        console.log("AUTH ERROR =>", error);

        return res.status(401).json({
            message: "Invalid token"
        });
    }
};

module.exports = authMiddleware;