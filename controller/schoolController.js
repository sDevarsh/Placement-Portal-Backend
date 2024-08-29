import School from "../models/School.js";

const SchoolController = {
  getAll: async (req, res) => {
    try {
      const schools = await School.getAll();
      res.status(200).json(schools);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getSchoolById: async (req, res) => {
    try {
      const school = await School.getById(req.params.id);
      if (!school) return res.status(404).json({ message: "School not found" });
      res.status(200).json(school);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  insertNewSchool: async (req, res) => {
    try {
      const { school_name } = req.body;
      await School.insert({ school_name });
      res.status(201).json({ message: "School added successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteSchoolById: async (req, res) => {
    try {
      await School.deleteById(req.params.id);
      res.status(200).json({ message: "School deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateSchoolById: async (req, res) => {
    try {
      await School.updateById(req.params.id, req.body);
      res.status(200).json({ message: "School updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default SchoolController;
