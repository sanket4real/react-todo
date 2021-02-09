import Button from "./button";

const header = ({ title }) => {
	const onClick = () => {
		console.log("clicked");
	};

	return (
		<header className="header">
			<h1>Task Master for {title}</h1>
			<Button color="green" text="Add" onClick={onClick} />
		</header>
	);
};

header.defaultProps = {
	title: "Sanket",
};

export default header;
