import bcrypt from "bcrypt";
import User from "./user.model.js";

export const registerUser = async (username, password) => {
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    throw new Error("Username already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    password: hashedPassword,
  });

  return user;
};