import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    const newTask = prompt('Edit task:', tasks[index]);
    if (newTask !== null && newTask.trim()) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = newTask.trim();
      setTasks(updatedTasks);
    }
  };

  return (
    <div
      style={{
        width: '480px',
        margin: '60px auto',
        fontFamily: 'sans-serif',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        borderRadius: '8px',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '40px',
          marginBottom: '30px',
          fontWeight: '900',
          letterSpacing: '1px',
        }}
      >
        TO DO LIST
      </h1>

      {/* Input and Add Button */}
      <div style={{ display: 'flex', marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="add item . . ."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: '14px',
            fontSize: '16px',
            border: '1px solid #aaa',
            borderTopLeftRadius: '4px',
            borderBottomLeftRadius: '4px',
            backgroundColor: '#fff',
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: '14px 24px',
            fontSize: '16px',
            backgroundColor: '#2b2b2b',
            color: 'white',
            border: 'none',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            cursor: 'pointer',
            // fontWeight: 'bold',
          }}
        >
          ADD
        </button>
      </div>

      {/* Task List */}
      {tasks.map((task, index) => (
        <div
          key={index}
          style={{
            backgroundColor: 'rgba (0, 0, 0, 0.1)',
            padding: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // marginBottom: '2px',
            borderRadius: '0px',
            boxShadow: 'inset 0 0 2px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span style={{ fontSize: '16px', fontWeight: '50' }}>{task}</span>
          <div>
            <button
              onClick={() => deleteTask(index)}
              style={{
                marginRight: '8px',
                padding: '10px 20px',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                // fontWeight: 'bold',
                boxShadow: '1px 1px 2px rgba(250, 239, 239, 0.1)',
              }}
            >
              Delete
            </button>
            <button
              onClick={() => editTask(index)}
              style={{
                padding: '10px 20px',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              }}
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
