const Task = require('../models/Task');


exports.getTasks = async (req, res) => {
try {
const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
res.json(tasks);
} catch (err) {
res.status(500).json({ msg: 'Server error' });
}
};


exports.createTask = async (req, res) => {
try {
const { title, description, priority, dueDate } = req.body;
if (!title) return res.status(400).json({ msg: 'Title required' });
const task = new Task({ title, description, priority, dueDate, user: req.user._id });
await task.save();
res.json(task);
} catch (err) {
res.status(500).json({ msg: 'Server error' });
}
};


exports.updateTask = async (req, res) => {
try {
const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
if (!task) return res.status(404).json({ msg: 'Task not found' });
Object.assign(task, req.body);
await task.save();
res.json(task);
} catch (err) {
res.status(500).json({ msg: 'Server error' });
}
};


exports.deleteTask = async (req, res) => {
try {
const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user._id });
if (!task) return res.status(404).json({ msg: 'Task not found' });
res.json({ msg: 'Task deleted' });
} catch (err) {
res.status(500).json({ msg: 'Server error' });
}
};
