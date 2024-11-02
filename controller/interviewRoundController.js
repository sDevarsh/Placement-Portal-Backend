import InterviewRound from "../models/InterviewRound.js";

const InterviewRoundController = {
  insertRound: async (req, res) => {
    try {
      const result = await InterviewRound.insert(req.body);
      if (result.error) throw new Error(result.error);
      res.status(201).json({ message: "Interview round added successfully." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllRounds: async (req, res) => {
    try {
      const rounds = await InterviewRound.getAll();
      res.json(rounds);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getRoundsByCompanyId: async (req, res) => {
    try {
      const rounds = await InterviewRound.getByCompanyId(req.params.company_id);
      if (rounds.error) throw new Error(rounds.error);
      res.json(rounds);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getRoundById: async (req, res) => {
    try {
      const round = await InterviewRound.getById(req.params.round_id);
      res.json(round);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateRoundById: async (req, res) => {
    try {
      await InterviewRound.updateById(req.params.round_id, req.body);
      res.json({ message: "Interview round updated successfully." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteRoundById: async (req, res) => {
    try {
      await InterviewRound.deleteById(req.params.round_id);
      res.json({ message: "Interview round deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default InterviewRoundController;
