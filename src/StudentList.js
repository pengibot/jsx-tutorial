import React from "react";

const StudentList = ({ students }) => {
  return (
    <ul>
      {students.map((student) => (
        <React.Fragment key={student.id}>
          <li>{student.name}</li>
          <li>Grade: {student.grade}</li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default StudentList;
