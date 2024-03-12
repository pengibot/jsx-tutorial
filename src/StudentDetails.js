import React from "react";

const StudentDetails = ({ match, students }) => {
  const studentId = parseInt(match.params.id, 10);
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
