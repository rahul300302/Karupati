const service = require("./LoginService");
// const jwt = require("jsonwebtoken");
// const { OAuth2Client } = require("google-auth-library");

module.exports.NormalLogin = async (req, res) => {
    try {
        await service.login(req, res)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports.OTP_verfication = async (req, res) => {
    try {
        await service.otp_verify(req, res)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
};

// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// module.exports.GoogleOAuthLogin = async (req, res) => {
//     try {
//         const { token } = req.body;
//         if (!token) {
//             return res.status(400).json({ success: false, message: "Token is required" });
//         }
//         const ticket = await client.verifyIdToken({
//             idToken: token,
//             audience: process.env.GOOGLE_CLIENT_ID,
//         });
//         const { name, email, picture } = ticket.getPayload();
//         const jwtToken = jwt.sign({ name, email, picture }, process.env.JWT_SECRET, { expiresIn: "1h" });

//         res.json({ success: true, message: "Google Login Successful", token: jwtToken, user: { name, email, picture, token: jwtToken } });
//     } catch (error) {
//         console.error("Google Login Error:", error.message);
//         res.status(401).json({ success: false, message: "Google Login Failed", error: error.message });
//     }
// };