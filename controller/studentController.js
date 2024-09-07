import express from "express";
import Student from "../models/Student.js";

const StudentController = {
  insertNewStudent: async (req, res) => {
    const student = req.body;

    try {
      const existingStudent = await Student.getStudentByRollNumber(
        student.rollNumber
      );
      if (existingStudent) {
        return res.status(400).json({
          message: "Student already exists.",
        });
      }

      const result = await Student.insert(student);

      if (result.error) {
        return res.status(500).json({
          message: "Failed to insert student.",
          error: result.error,
        });
      }
      return res.status(201).json({
        message: "Student inserted successfully.",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error.",
        error: error.message,
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const students = await Student.getAllStudents();
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getByRollNumber: async (req, res) => {
    try {
      const student = await Student.getStudentByRollNumber(
        req.params.rollNumber
      );
      res.json(student);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getStudentById: async (req, res) => {
    try {
      const student = await Student.getStudentById(req.params.id);
      res.json(student);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteStudentById: async (req, res) => {
    try {
      const student = await Student.deleteById(req.params.id);
      if (student.error) {
        return res.status(500).json({ error: student.error });
      }
      res.json({ message: "Deleted student successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteStudentByRollNumber: async (req, res) => {
    try {
      const student = await Student.deleteByRollNumber(req.params.rollNumber);
      if (student.error) {
        return res.status(500).json({ error: student.error });
      }
      res.json({ message: "Deleted student successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateStudentById: async (req, res) => {
    try {
      await Student.updateById(req.params.id, req.body);
      res.status(200).json({ message: "Student updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default StudentController;
