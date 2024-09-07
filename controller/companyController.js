import Company from "../models/Company.js";

const CompanyController = {
  getAll: async (req, res) => {
    try {
      const companies = await Company.getAll();
      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getCompanyById: async (req, res) => {
    try {
      const company = await Company.getById(req.params.id);
      if (!company)
        return res.status(404).json({ message: "Company not found" });
      res.status(200).json(company);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  insertNewCompany: async (req, res) => {
    try {
      const { company_name, email, phone_number, no_of_student_placed } =
        req.body;
      await Company.insert({
        company_name,
        email,
        phone_number,
        no_of_student_placed,
      });
      res.status(201).json({ message: "Company added successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteCompanyById: async (req, res) => {
    try {
      await Company.deleteById(req.params.id);
      res.status(200).json({ message: "Company deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateCompanyById: async (req, res) => {
    try {
      await Company.updateById(req.params.id, req.body);
      res.status(200).json({ message: "Company updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default CompanyController;
