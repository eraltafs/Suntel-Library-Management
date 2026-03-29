import { registerUser, loginUser } from "./auth.service.js";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password required",
      });
    }

    const user = await registerUser(username, password);

    res.status(201).json({
      message: "User registered successfully",
      userId: user._id,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password required",
      });
    }

    const token = await loginUser(username, password);

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};