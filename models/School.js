import db from "../databaseConnect.js";

const School = {
  getAllSchools: async () => {
    try {
      const [schools] = await db.query("SELECT * FROM school");
      return schools.length ? schools : null;
    } catch (error) {
      console.error("Error fetching all schools:", error);
      return { error: error.message };
    }
  },
  
  getSchoolById: async (id) => {
    try {
      const [school] = await db.query("SELECT * FROM school WHERE school_id = ?", [id]);
      return school.length ? school[0] : null;
    } catch (error) {
      console.error("Error fetching school by ID:", error);
      return { error: error.message };
    }
  },

  deleteSchoolById: async (id) => {
    try {
      const result = await db.query("DELETE FROM school WHERE school_id = ?", [id]);
      return result;
    } catch (error) {
      console.error("Error deleting school by ID:", error);
      return { error: error.message };
    }
  },
};

export default School;
