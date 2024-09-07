import db from "../databaseConnect.js";

const Placement = {
  getAll: async () => {
    try {
      const [placements] = await db.query("SELECT * FROM placement");
      return placements.length ? placements : null;
    } catch (error) {
      console.error("Error fetching all placements:", error);
      return { error: error.message };
    }
  },

  getById: async (id) => {
    try {
      const [placement] = await db.query(
        "SELECT * FROM placement WHERE placement_id = ?",
        [id]
      );
      return placement.length ? placement[0] : null;
    } catch (error) {
      console.error("Error fetching placement by ID:", error);
      return { error: error.message };
    }
  },

  insert: async (data) => {
    if (
      !data.company_id ||
      !data.student_id ||
      !data.position ||
      !data.package
    ) {
      return {
        error:
          "company_id, student_id, position, and package fields cannot be NULL.",
      };
    }

    const query = `
      INSERT INTO placement (
        company_id, student_id, position, package, placement_date, location
      ) VALUES (?, ?, ?, ?, ?, ?)
    `;
    const placement_date = new Date(data.placement_date)
      .toISOString()
      .split("T")[0];
    const values = [
      data.company_id,
      data.student_id,
      data.position,
      data.package,
      placement_date,
      data.location,
    ];

    try {
      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      console.error("Error inserting new placement:", error);
      return { error: error.message };
    }
  },

  deleteById: async (id) => {
    try {
      const result = await db.query(
        "DELETE FROM placement WHERE placement_id = ?",
        [id]
      );
      return result;
    } catch (error) {
      console.error("Error deleting placement by ID:", error);
      return { error: error.message };
    }
  },

  updateById: async (id, data) => {
    try {
      const query = `
        UPDATE placement
        SET company_id = ?, student_id = ?, position = ?, package = ?, placement_date = ?, location = ?
        WHERE placement_id = ?
      `;

      const values = [
        data.company_id,
        data.student_id,
        data.position,
        data.package,
        data.placement_date,
        data.location,
        id,
      ];

      const [result] = await db.query(query, values);
      return result;
    } catch (error) {
      console.error("Error updating placement by ID:", error);
      return { error: error.message };
    }
  },
};

export default Placement;
