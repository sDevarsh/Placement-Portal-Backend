import db from "../databaseConnect.js";

const InterviewRound = {
  insert: async (data) => {
    const query = `
      INSERT INTO interview_round (company_id, round_number, round_type, round_date, description)
      VALUES (?, ?, ?, ?, ?)
    `;
    const values = [
      data.company_id,
      data.round_number,
      data.round_type,
      data.round_date,
      data.description,
    ];

    try {
      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      return { error: error.message };
    }
  },
  getByCompanyId: async (company_id) => {
    try {
      const [results] = await db.query(
        "SELECT * FROM interview_round WHERE company_id = ?",
        [company_id]
      );
      return results;
    } catch (error) {
      return { error: error.message };
    }
  },
  getAll: async () => {
    try {
      const [results] = await db.query("SELECT * FROM interview_round");
      return results;
    } catch (error) {
      return { error: error.message };
    }
  },

  getById: async (round_id) => {
    try {
      const [results] = await db.query(
        "SELECT * FROM interview_round WHERE round_id=?",
        [round_id]
      );
      return results.length ? results[0] : null;
    } catch (error) {
      return { error: error.message };
    }
  },

  updateById: async (round_id, data) => {
    const query = `
      UPDATE interview_round SET
        company_id = ?, round_number = ?, round_type = ?, round_date = ?, description = ?
      WHERE round_id = ?
    `;
    const values = [
      data.company_id,
      data.round_number,
      data.round_type,
      data.round_date,
      data.description,
      round_id,
    ];

    try {
      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      return { error: error.message };
    }
  },

  deleteById: async (round_id) => {
    try {
      const [result] = await db.query(
        "DELETE FROM interview_round WHERE round_id=?",
        [round_id]
      );
      return result;
    } catch (error) {
      return { error: error.message };
    }
  },
};

export default InterviewRound;
