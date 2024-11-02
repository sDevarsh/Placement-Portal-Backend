import db from "../databaseConnect.js";

const RoundParticipation = {
  insert: async (data) => {
    const query = `
      INSERT INTO round_participation (round_id, student_id, remarks)
      VALUES (?, ?, ?)
    `;
    const values = [data.round_id, data.student_id, data.remarks];

    try {
      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      return { error: error.message };
    }
  },

  getAll: async () => {
    try {
      const [results] = await db.query("SELECT * FROM round_participation");
      return results;
    } catch (error) {
      return { error: error.message };
    }
  },

  getByRoundId: async (round_id) => {
    try {
      const [results] = await db.query(
        "SELECT * FROM round_participation WHERE round_id=?",
        [round_id]
      );
      return results;
    } catch (error) {
      return { error: error.message };
    }
  },

  deleteById: async (participation_id) => {
    try {
      const [result] = await db.query(
        "DELETE FROM round_participation WHERE participation_id=?",
        [participation_id]
      );
      return result;
    } catch (error) {
      return { error: error.message };
    }
  },
  getStudentsByRoundId: async (round_id) => {
    try {
      const query = `
        SELECT s.*, rp.remarks 
        FROM student s
        JOIN round_participation rp ON s.student_id = rp.student_id
        WHERE rp.round_id = ?
      `;
      const [results] = await db.query(query, [round_id]);
      return results;
    } catch (error) {
      return { error: error.message };
    }
  },
};

export default RoundParticipation;
