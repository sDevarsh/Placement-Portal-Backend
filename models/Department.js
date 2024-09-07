import db from "../databaseConnect.js";

const Department = {
  getAll: async () => {
    try {
      const [departments] = await db.query("SELECT * FROM department");
      return departments.length ? departments : null;
    } catch (error) {
      console.error("Error fetching all departments:", error);
      return { error: error.message };
    }
  },

  getById: async (id) => {
    try {
      const [department] = await db.query(
        "SELECT * FROM department WHERE dep_id = ?",
        [id]
      );
      return department.length ? department[0] : null;
    } catch (error) {
      console.error("Error fetching department by ID:", error);
      return { error: error.message };
    }
  },

  insert: async (data) => {
    if (!data.name || !data.school_id) {
      return {
        error: "Department name and school_id fields cannot be NULL.",
      };
    }

    const query = `
      INSERT INTO department (
        name, school_id, head_of_department, description
      ) VALUES (?, ?, ?, ?)
    `;

    const values = [
      data.name,
      data.school_id,
      data.head_of_department || null,
      data.description || null,
    ];

    try {
      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      console.error("Error inserting new department:", error);
      return { error: error.message };
    }
  },

  deleteById: async (id) => {
    try {
      const result = await db.query("DELETE FROM department WHERE dep_id = ?", [
        id,
      ]);
      return result;
    } catch (error) {
      console.error("Error deleting department by ID:", error);
      return { error: error.message };
    }
  },

  updateById: async (id, data) => {
    try {
      const query = `
        UPDATE department
        SET name = ?, school_id = ?, head_of_department = ?, description = ?
        WHERE dep_id = ?
      `;

      const values = [
        data.name,
        data.school_id,
        data.head_of_department || null,
        data.description || null,
        id,
      ];

      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      console.error("Error updating department by ID:", error);
      return { error: error.message };
    }
  },
};

export default Department;
