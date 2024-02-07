import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";

export default function Login() {
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="login-wrapper">
			<div className="login-container">
				<div className="img-container">img</div>
				<div className="form-container">
					<form>
						<h1>Bem-vindo!</h1>

						<input
							placeholder="Nome de usuário"
							defaultValue={id}
							onChange={(e) => setId(e.target.value)}
						/>
						<input
							placeholder="Senha"
							defaultValue={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button className="button" type="submit">
							Entrar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
