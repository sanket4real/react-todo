import Button from "./button";

const header = ({ title, onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1>Task Master for {title}</h1>
			<Button
				color={showAdd ? "red" : "green"}
				text={showAdd ? "Close" : "Add"}
				onClick={onAdd}
			/>
		</header>
	);
};

header.defaultProps = {
	title: "Sanket",
};

export default header;
