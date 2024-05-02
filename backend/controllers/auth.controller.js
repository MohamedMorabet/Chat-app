export const signup = async (req, res) => {
    try {
        const { fullNamr, username, password, confirmPassword, gender } = req.body;
    } catch (error) {
        
    }
}

export const login = (req, res) => {
    console.log("login user");
}

export const logout = (req, res) => {
    console.log("Logout user");
}