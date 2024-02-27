import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [homework, setHomework] = useState([]);

  const updateHomework = (subject, dueDate) => {
    setHomework([...homework, { subject, dueDate }]);
  };

  const checkHomework = () => {
    if (homework.length === 0) {
      console.log("You don't have any homework assignments due.");
    } else {
      console.log("Here are your upcoming homework assignments:");
      homework.forEach((assignment) => {
        console.log(`Subject: ${assignment.subject} | Due Date: ${assignment.dueDate}`);
      });
    }
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddHomework = (event) => {
    event.preventDefault();
    updateHomework(subject, dueDate);
    setSubject('');
    setDueDate('');
  };

  return (
    <div>
      <h1>Homework Bot</h1>
      <form onSubmit={handleAddHomework}>
        <label>
          Subject:
          <input type="text" value={subject} onChange={handleSubjectChange} />
        </label>
        <label>
          Due Date:
          <input type="date" value={dueDate} onChange={handleDueDateChange} />
        </label>
        <button type="submit">Add Homework</button>
      </form>
      <button onClick={checkHomework}>Check Homework</button>
    </div>
  );
};

export default App;
