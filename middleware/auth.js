import jwt from "jsonwebtoken";
const authmiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log(token);
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }
  try {
    const decode = jwt.verify(token, process.env.secret_key);
    console.log(decode);
    req.user = decode;
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid token" });
  }
};
export default authmiddleware;
