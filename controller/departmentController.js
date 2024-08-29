import Department from "../models/Department.js";

const DepartmentController = {
  getAll: async (req, res) => {
    try {
      const departments = await Department.getAll();
      res.status(200).json(departments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getDepartmentById: async (req, res) => {
    try {
      const department = await Department.getById(req.params.id);
      if (!department) return res.status(404).json({ message: "Department not found" });
      res.status(200).json(department);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  insertNewDepartment: async (req, res) => {
    try {
      const { dep_name, school_id } = req.body;
      await Department.insert({ dep_name, school_id });
      res.status(201).json({ message: "Department added successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteDepartmentById: async (req, res) => {
    try {
      await Department.deleteById(req.params.id);
      res.status(200).json({ message: "Department deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateDepartmentById: async (req, res) => {
    try {
      await Department.updateById(req.params.id, req.body);
      res.status(200).json({ message: "Department updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default DepartmentController;
