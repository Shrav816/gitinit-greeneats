import classes from  './Text.module.css';

function Text(props) {
	
	const name = "Username";
	
	return (
		<div>
			<h1>GreenEats</h1>
			<p>{props.name === "Username" ? "huzzah" : "oops"}</p>
		</div>
	);
}

export default Text;