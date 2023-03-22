import Users from '../models/UsersModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const {email, password } = req.body;

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        await Users.create({
            username: email, 
            password: hashPassword
        });
        res.json({msg: 'Register Successful!'});
    } catch (error) {
        console.log('err', error);
        res.status(403).json({msg: 'Email already exists!'});
    }
};
