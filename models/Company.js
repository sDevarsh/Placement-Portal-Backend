import db from "../databaseConnect.js";

const Company = {
  getAll: async () => {
    try {
      const [companies] = await db.query("SELECT * FROM company");
      return companies.length ? companies : null;
    } catch (error) {
      console.error("Error fetching all companies:", error);
      return { error: error.message };
    }
  },

  getById: async (id) => {
    try {
      const [company] = await db.query(
        "SELECT * FROM company WHERE company_id = ?",
        [id]
      );
      return company.length ? company[0] : null;
    } catch (error) {
      console.error("Error fetching company by ID:", error);
      return { error: error.message };
    }
  },

  insert: async (data) => {
    if (!data.company_name || !data.email) {
      return {
        error: "Company name and email fields cannot be NULL.",
      };
    }

    const query = `
      INSERT INTO company (
        company_name, email, phone_number, no_of_student_placed
      ) VALUES (?, ?, ?, ?)
    `;

    const values = [
      data.company_name,
      data.email,
      data.no_of_student_placed || null,
      data.phone_number || null,
    ];

    try {
      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      console.error("Error inserting new company:", error);
      return { error: error.message };
    }
  },

  deleteById: async (id) => {
    try {
      const result = await db.query(
        "DELETE FROM company WHERE company_id = ?",
        [id]
      );
      return result;
    } catch (error) {
      console.error("Error deleting company by ID:", error);
      return { error: error.message };
    }
  },

  updateById: async (id, data) => {
    try {
      if (!data.company_name || !data.email) {
        return {
          error: "Company name and email fields cannot be NULL.",
        };
      }
      const query = `
        UPDATE company
        SET company_name = ?, email = ?, no_of_student_placed = ?, phone_number = ?
        WHERE company_id = ?
      `;

      const values = [
        data.company_name,
        data.email,
        data.no_of_student_placed || null,
        data.phone_number || null,
        id,
      ];

      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      console.error("Error updating company by ID:", error);
      return { error: error.message };
    }
  },
};

export default Company;
