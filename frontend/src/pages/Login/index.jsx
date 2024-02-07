import React, { useState } from "react";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { TextField, Button } from "@mui/material";
import ImgLogin from "../../assets/img-login.jpg";

import "./styles.css";

export default function Login() {
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="login-wrapper">
			<div className="login-container">
				<div className="img-container">
					<img src={ImgLogin} alt="Login Image" />
				</div>
				<div className="form-container">
					<form>
						<h1>Bem-vindo!</h1>

						<TextField
							id="outlined-basic"
							label="Usuário"
							variant="outlined"
							margin="normal"
							onSubmit={(e) => setId(e.target.value)}
						/>
						<TextField
							id="outlined-basic"
							label="Senha"
							variant="outlined"
							type="password"
							margin="normal"
							onSubmit={(e) => setPassword(e.target.value)}
						/>
						<Button variant="contained" size="large">
							Entrar
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}
