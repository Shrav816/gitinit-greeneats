import classes from "./LoginButton.module.css";

function LoginButton() {
	return (
		<div>
			<button type="button" className={classes.loginButton}>Login</button>
		</div>
	);
}

export default LoginButton;