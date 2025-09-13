import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


function App() {
const [token, setToken] = useState(localStorage.getItem('token') || '');


if (!token) return (
<div className="container">
<h1>Task Manager</h1>
<Signup setToken={(t) => { localStorage.setItem('token', t); setToken(t); }} />
<hr />
<Login setToken={(t) => { localStorage.setItem('token', t); setToken(t); }} />
</div>
);


return (
<div className="container">
<h1>Task Manager</h1>
<button onClick={() => { localStorage.removeItem('token'); setToken(''); }}>Logout</button>
<TaskForm token={token} />
<TaskList token={token} />
</div>
);
}


export default App;
