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
  getAllDetails: async () => {
    const query = `
      SELECT 
        p.placement_id,
        s.name AS student_name,
        c.company_name,
        p.position,
        p.salary,
        p.placement_date,
        p.location,
        p.core_non_core
      FROM placement p
      JOIN student s ON p.student_id = s.student_id
      JOIN company c ON p.company_id = c.company_id
    `;
    try {
      const [result] = await db.query(query);
      return result.length ? result : null;
    } catch (error) {
      console.error("Error fetching all placement details:", error);
      return { error: error.message };
    }
  },
  getCoreNonCoreCount: async () => {
    const query = `
      SELECT 
        core_non_core,
        COUNT(*) AS count
      FROM placement
      GROUP BY core_non_core
    `;
    try {
      const [result] = await db.query(query);
      return result.length ? result : null;
    } catch (error) {
      console.error("Error fetching core/non-core placements:", error);
      return { error: error.message };
    }
  },
  getPlacedYearOfStudyWise: async () => {
    const query = `
      SELECT 
        s.year_of_study AS year,
        COUNT(p.student_id) AS placed_students
      FROM placement p
      JOIN student s ON p.student_id = s.student_id
      GROUP BY s.year_of_study
    `;
    try {
      const [result] = await db.query(query);
      return result.length ? result : null;
    } catch (error) {
      console.error(
        "Error fetching placed students year-of-study wise:",
        error
      );
      return { error: error.message };
    }
  },
  getPlacedDepartmentWise: async () => {
    const query = `
      SELECT 
        d.dep_name AS department, 
        COUNT(p.student_id) AS placed_students
      FROM placement p
      JOIN student s ON p.student_id = s.student_id
      JOIN department d ON s.dep_id = d.dep_id
      GROUP BY d.dep_id
    `;
    try {
      const [result] = await db.query(query);
      return result.length ? result : null;
    } catch (error) {
      console.error("Error fetching placed students department-wise:", error);
      return { error: error.message };
    }
  },

  getByCompanyId: async (id) => {
    try {
      const [placement] = await db.query(
        "SELECT * FROM placement WHERE company_id = ?",
        [id]
      );
      return placement.length ? placement[0] : null;
    } catch (error) {
      console.error("Error fetching placement by ID:", error);
      return { error: error.message };
    }
  },

  insert: async (data) => {
    // console.log(company_id);
    if (!data.company_id || !data.student_id || !data.position) {
      return {
        error:
          "company_id, student_id, position, and package fields cannot be NULL.",
      };
    }
    const query = `
      INSERT INTO placement (
        company_id, student_id, position,  placement_date, location,salary ,offer_type, offer_letter, core_non_core
      ) VALUES (?, ?, ?, ?, ?, ?,?,?,?)
    `;
    const placement_date = new Date(data.placement_date)
      .toISOString()
      .split("T")[0];
    const values = [
      parseInt(data.company_id),
      data.student_id,
      data.position,
      placement_date,
      data.location,
      data.salary,
      data.offer_type,
      data.offer_letter,
      data.core_non_core,
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
        SET company_id = ?, student_id = ?, position = ?, placement_date = ?, location = ?, salary = ?,offer_type	=?, offer_letter=?, core_non_core=?
	
        WHERE placement_id = ?
      `;
      const placement_date = new Date(data.placement_date)
        .toISOString()
        .split("T")[0];
      const values = [
        data.company_id,
        data.student_id,
        data.position,
        placement_date,
        data.location,
        data.salary,
        data.offer_type,
        data.offer_letter,
        data.core_non_core,
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
