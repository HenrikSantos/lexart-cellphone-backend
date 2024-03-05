import User from "../database/models/User";
import { IUser } from "../interfaces/IUser";
import { generateToken } from "../utils/generateToken";
import bcrypt from "bcrypt";

export async function login(user: IUser) {
    const userFound = await User.findOne({ where: { email: user.email } });

    if (!userFound || !bcrypt.compareSync(user.password, userFound.password)) return null;

    const token = generateToken(userFound.email);

    return token;
}
