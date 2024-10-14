import express from "express";
const app = express();

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";
const AdminController = {
  signup: async (req, res) => {
    try {
      const { email, password } = req.body;

      const existingEmail = await Admin.getAdmin(email);
      if (existingEmail) {
        return res.status(400).json({
          message: "Email is already in use. Please use a different email.",
        });
      }

      await Admin.insert({
        email: email,
        password: password,
      });
      res.status(201).json({
        message: "User registered successfully",

        user: {
          email: email,
        },
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Admin.getAdmin(email);

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      const token = jwt.sign({ id: user.id }, process.env.secret_key, {
        expiresIn: "1h",
      });
      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
export default AdminController;
