import { useState } from "react";
import Header from "./components/header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask.js";
import "./index.css";

function App() {
	const [TaskList, setTasks] = useState([
		{
			id: 1,
			text: "Task1.0",
			day: "Jan 20 at 10.40 am",
			reminder: true,
		},
		{
			id: 2,
			text: "Task2.0",
			day: "Feb 20 at 10.40 am",
			reminder: false,
		},
		{
			id: 3,
			text: "Task3.0",
			day: "Mar 20 at 10.40 am",
			reminder: false,
		},
	]);

	//Toggle reminder
	const toggleReminder = (id) => {
		console.log("reminder", id);
		setTasks(
			TaskList.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	//add new task
	const addTask = (task) => {
		console.log(task);
	};

	//delete task
	const deleteTask = (id) => {
		setTasks(TaskList.filter((task) => task.id !== id));
	};

	return (
		<div className="container">
			<Header />
			<AddTask onAdd={addTask} />
			{TaskList.length > 0 ? (
				<Tasks
					tasks={TaskList}
					onDelete={deleteTask}
					onToggle={toggleReminder}
				/>
			) : (
				"No Tasks "
			)}
		</div>
	);
}

export default App;
