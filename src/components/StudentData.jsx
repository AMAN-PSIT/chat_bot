// src/components/StudentData.jsx
import React from 'react';
import './StudentData.css'; // Import the CSS file

const StudentData = () => {
  const students = [
    { id: 1, name: 'John Doe', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Jane Smith', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Alice Johnson', age: 21, major: 'Physics' },
  ];

  return (
    <div className="student-data">
      <h2>Student Data</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            <h3>{student.name}</h3>
            <p>Age: {student.age}</p>
            <p>Major: {student.major}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentData;