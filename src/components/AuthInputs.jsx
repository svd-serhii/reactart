import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function AuthInputs() {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");
	const [submitted, setSubmitted] = useState(false);

	function handleInputChange(identifier, value) {
		if (identifier === "email") {
			setEnteredEmail(value);
		} else {
			setEnteredPassword(value);
		}
	}

	function handleLogin() {
		setSubmitted(true);
	}

	const emailNotValid = submitted && !enteredEmail.includes("@");
	const passwordNotValid = submitted && enteredPassword.trim().length < 6;

	return (
		<div
			id="auth-inputs"
			className="w-full max-w-sm p-8 rounded shadow-md bg-gradient-to-b"
		>
			<div className="controls">
				<Input
					invalid={emailNotValid}
					label="Email"
					type="email"
					onChange={(event) => handleInputChange("email", event.target.value)}
				/>
				<Input
					invalid={passwordNotValid}
					label="Password"
					type="password"
					onChange={(event) =>
						handleInputChange("password", event.target.value)
					}
				/>
			</div>
			<div className="actions">
				<button type="button" className="text-button">
					Create a new account
				</button>
				<Button onClick={handleLogin}>Sign In</Button>
			</div>
		</div>
	);
}
