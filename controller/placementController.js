import Placement from "../models/Placement.js";

const PlacementController = {
  getAll: async (req, res) => {
    try {
      const placements = await Placement.getAll();
      res.status(200).json(placements);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPlacementById: async (req, res) => {
    try {
      const placement = await Placement.getById(req.params.id);
      if (!placement)
        return res.status(404).json({ message: "Placement not found" });
      res.status(200).json(placement);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getStudentsPlacedYearOfStudyWise: async (req, res) => {
    try {
      const result = await Placement.getPlacedYearOfStudyWise();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getStudentsPlacedDepartmentWise: async (req, res) => {
    try {
      const result = await Placement.getPlacedDepartmentWise();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllPlacementDetails: async (req, res) => {
    try {
      const result = await Placement.getAllDetails();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getCoreNonCorePlacements: async (req, res) => {
    try {
      const result = await Placement.getCoreNonCoreCount();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getPlacementByCompanyId: async (req, res) => {
    try {
      const placement = await Placement.getByCompanyId(req.params.id);
      if (!placement)
        return res.status(404).json({ message: "Placement not found" });
      res.status(200).json(placement);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  insertNewPlacement: async (req, res) => {
    try {
      const {
        student_id,
        company_id,
        position,
        location,
        salary,
        placement_date,
        offer_type,
        offer_letter,
        core_non_core,
      } = await req.body;

      let obj = {
        student_id,
        company_id,
        position,
        location,
        salary,
        placement_date,
        offer_type,
        offer_letter,
        core_non_core,
      };
      console.log(obj);
      await Placement.insert(obj);

      res.status(201).json({ message: "Placement added successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deletePlacementById: async (req, res) => {
    try {
      await Placement.deleteById(req.params.id);
      res.status(200).json({ message: "Placement deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updatePlacementById: async (req, res) => {
    try {
      await Placement.updateById(req.params.id, req.body);
      res.status(200).json({ message: "Placement updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default PlacementController;
