import User from "../database/models/User";
import { IUser } from "../interfaces/IUser";
import { generateToken } from "../utils/generateToken";
import bcrypt from "bcrypt";

export async function createUser(user: IUser) {
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        
        const newUser = await User.create( { email: user.email, password: hashedPassword });

        const token = await generateToken(newUser.email);

        return { id: newUser.id, email: newUser.email, token };
    } catch (error) {
        throw new Error("Failed to create user");
    }
}

export async function deleteUser(id: string) {
    try {
        await User.destroy({ where: { id } });
    } catch (error) {
        throw new Error("Failed to delete user");
    }
}
