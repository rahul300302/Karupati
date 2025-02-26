const AdminUser = require("./LoginModel.js");
const { generateToken } = require("../../../middleware/utils/generateToken.js");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer")


module.exports.login = async (req, res) => {
    const { name, email, role } = req.body;
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "rahulraw2022@gmail.com",
            pass: "dxft nwjj jqsm nltz",
        },
    });
    try {
        let result = await AdminUser.findOne({ email });
        console.log(result);
        if (!result) {
            // res.status(400).json({ status: false, message: "User already exists", data: userExists });
            result = await AdminUser.create({ name, email, role });
        }
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
        console.log(otp, "otp");
        let token = await generateToken(result._id)
        result.token = token
        result.otp = otp
        result.save()
        const mailOptions = {
            from: "rahulraw2022@gmail.com",
            to: email,
            subject: "Your OTP Code",
            text: `Your OTP is: ${otp}. It is valid for 5 minutes.`,
        };
        // await transporter.sendMail(mailOptions);
        return res.status(201).json({ status: true, message: "User Created Successfully", data: result });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
}



module.exports.otp_verify = async (req, res) => {
    const { otp, email } = req.body;
    try {
        let result = await AdminUser.findOne({ email });
        if (result.otp==otp) {
            return res.status(201).json({ status: true, message: "Login Successfully", data: result });
        }else{
            return res.status(201).json({ status: false, message: "OTP Wrong ", data: result });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error" });
    }
}