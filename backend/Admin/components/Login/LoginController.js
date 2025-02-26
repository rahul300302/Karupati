const service = require("./LoginService");

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


module.exports.GoogleOAthuLogin = async (req, res) => {
    try {
        await service.otp_verify(req, res)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
};