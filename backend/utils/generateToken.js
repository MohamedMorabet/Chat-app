import jwt from "jsonwebtoken";

// generate token and send it in cookie
export const generateToken_SetCookie = (userId, res) => {
    // generate token with userId and JWT_SECRET
    const token = jwt.sign(
                        { userId }, 
                        process.env.JWT_SECRET, 
                        { expiresIn: "30d" }
    );

    // send token in cookie
    res.cookie("jwt", token, { 
        maxAge: 30 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true, // for security    the token can only be accessed by the server not js
        sameSite: "strict", // CSRF attacks cross-site request forgery
        secure: process.env.NODE_ENV !== "development"
     });
};

export default generateToken_SetCookie;