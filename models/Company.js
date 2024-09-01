import db from "../databaseConnect.js";

const Company = {
  getAllCompanies: async () => {
    try {
      const [companies] = await db.query("SELECT * FROM company");
      return companies.length ? companies : null;
    } catch (error) {
      console.error("Error fetching all companies:", error);
      return { error: error.message };
    }
  },

  getCompanyById: async (id) => {
    try {
      const [company] = await db.query("SELECT * FROM company WHERE company_id = ?", [id]);
      return company.length ? company[0] : null;
    } catch (error) {
      console.error("Error fetching company by ID:", error);
      return { error: error.message };
    }
  },

  insert: async (data) => {
    if (!data.name || !data.location) {
      return {
        error: "Company name and location fields cannot be NULL.",
      };
    }

    const query = `
      INSERT INTO company (
        name, location, industry, description, website, contact_email
      ) VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [
      data.name,
      data.location,
      data.industry || null,
      data.description || null,
      data.website || null,
      data.contact_email || null,
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
      const result = await db.query("DELETE FROM company WHERE company_id = ?", [id]);
      return result;
    } catch (error) {
      console.error("Error deleting company by ID:", error);
      return { error: error.message };
    }
  },

  updateById: async (id, data) => {
    try {
      const query = `
        UPDATE company
        SET name = ?, location = ?, industry = ?, description = ?, website = ?, contact_email = ?
        WHERE company_id = ?
      `;

      const values = [
        data.name,
        data.location,
        data.industry || null,
        data.description || null,
        data.website || null,
        data.contact_email || null,
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
