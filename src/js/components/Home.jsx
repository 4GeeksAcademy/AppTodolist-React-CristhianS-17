import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [taskLabel, setTaskLabel] = React.useState("");
	const [All, setAll] = React.useState([]);

	const onChange = (e) => {
		if (e.key === "Enter" && taskLabel.trim() !== "") {
			const newAll = {
				id: Date.now(),
				label: taskLabel.trim(),
			};
			setAll([...All, newAll]);
			setTaskLabel("");
		}
	};

	const onDelete = (id) => {
		setAll(All.filter((task) => task.id !== id));
	};

	return (
		<div className="container">
			<h1 className="title">My To do List</h1>
			<div className="todo-card">
				<input
					className="todo-input"
					type="text"
					placeholder="What needs to be done?"
					value={taskLabel}
					onChange={(e) => setTaskLabel(e.target.value)}
					onKeyDown={onChange}
				/>

				<ul className="todo-list">
					{All.length === 0 ? (

						<li className="todo-item empty-msg">No tasks, add a new one!</li>
					) : (
						All.map((task) => (
							<li key={task.id} className="todo-item fade-in">
								<div className="todo-content">
									<span className="bullet"></span>
									<span className="task-text">{task.label}</span>
								</div>
								<button
									className="delete-button"
									onClick={() => onDelete(task.id)}
								>
									x
								</button>
							</li>
						))
					)}
				</ul>

				<div className="footer">
					<span>{All.length} {All.length === 1 ? "item" : "items"} left</span>
				</div>
			</div>
		</div>
	);
};
export default Home;