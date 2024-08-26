import db from "../databaseConnect.js";

const Student = {
  getStudentByRollNumber: async (rollNumber) => {
    const result = await db.query("SELECT * FROM student WHERE rollNumber=?", [
      rollNumber,
    ]);
    const student = result[0];
    if (student.length != 0) return student[0];
    else return null;
  },
  getStudentById: async (id) => {
    const result = await db.query("SELECT * FROM student WHERE student_id=?", [
      id,
    ]);
    const student = result[0];
    if (student.length != 0) return student[0];
    else return null;
  },
  getAllStudents: async () => {
    const result = await db.query("SELECT * FROM student");
    const student = result[0];
    if (student.length != 0) return student;
    else return null;
  },

  insert: async (data) => {
    if (!data.dep_id || !data.school_id || !data.rollNumber || !data.name) {
      return {
        error:
          "dep_id,school_id,rollNumber,name any of this fields cannot be NULL.",
      };
    }

    const query = `
    INSERT INTO student (
        name, rollNumber, school_id, dep_id, year_of_study, personal_email, college_email, phone_number, date_of_birth, gender, city, state, 
        tenth_percentage, twelfth_percentage, diploma_percentage, cpi_after_7th_sem, cpi_after_8th_sem, remark, category, first_sem_spi, 
        second_sem_spi, third_sem_spi, fourth_fifth_sem_spi, sixth_sem_spi, seventh_sem_spi, eighth_sem_spi, no_of_backlog, no_of_active_backlog, optout
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

    const values = [
      data.name,
      data.rollNumber,
      data.school_id,
      data.dep_id,
      data.year_of_study,
      data.personal_email,
      data.college_email,
      data.phone_number,
      data.date_of_birth,
      data.gender,
      data.city,
      data.state,
      data.tenth_percentage,
      data.twelfth_percentage,
      data.diploma_percentage,
      data.cpi_after_7th_sem,
      data.cpi_after_8th_sem,
      data.remark,
      data.category,
      data.first_sem_spi,
      data.second_sem_spi,
      data.third_sem_spi,
      data.fourth_fifth_sem_spi,
      data.sixth_sem_spi,
      data.seventh_sem_spi,
      data.eighth_sem_spi,
      data.no_of_backlog,
      data.no_of_active_backlog,
      data.optout,
    ];

    try {
      const [result] = await db.query(query, values);
      return result;
    } catch (err) {
      console.error("Database insert error:", err);
      return { error: err.message };
    }
  },
  deleteById: async (id) => {
    try {
      const res = await db.query("delete from student where student_id=?", [
        id,
      ]);
      return res;
    } catch (err) {
      return { error: err.message };
    }
  },
  deleteByRollNumber: async (rollNumber) => {
    try {
      const res = await db.query("delete from student where rollNumber=?", [
        rollNumber,
      ]);
      return res;
    } catch (err) {
      return { error: err.message };
    }
  },
};

export default Student;
