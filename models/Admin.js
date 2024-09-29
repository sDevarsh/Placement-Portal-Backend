import db from "../databaseConnect.js";

import bcrypt from "bcryptjs";
const Admin = {
  getAdmin: async (email) => {
    const result = await db.query("select * from admin where email=?", email);
    const admin = result[0];
    if (admin.length != 0) return admin[0];
    else return null;
  },
  insert: async (data) => {
    const { email, password } = data;
    const hash = await bcrypt.hash(password, 10);

    const result = await db.query(
      "INSERT INTO admin(email, password) VALUES (?, ?)",
      [email, hash]
    );

    return result;
  },
};
export default Admin;
