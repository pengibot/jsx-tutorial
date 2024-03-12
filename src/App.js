import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import StudentDetails from "./StudentDetails";
import AddStudentForm from "./AddStudentForm";
import StudentList from "./StudentList";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "C" },
  ]);

  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/students">Students List</Link>
            </li>
            <li>
              <Link to="/add">Add Student</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/" />
          <Route
            path="/students"
            exact
            element={<StudentList students={students} />}
          />
          <Route
            path="/add"
            element={<AddStudentForm onAddStudent={addStudent} />}
          />
          <Route
            path="/students/:id"
            element={<StudentDetails students={students} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
