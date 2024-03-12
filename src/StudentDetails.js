import React from "react";
import { useParams } from "react-router-dom";

const StudentDetails = ({ match, students }) => {
  const { id } = useParams();
  const studentId = parseInt(id, 10);
  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return <p>Student not found.</p>;
  }

  return (
    <div>
      <h2>{student.name}</h2>
      <p>Grade: {student.grade}</p>
      <p>ID: {student.id}</p>
    </div>
  );
};

export default StudentDetails;
