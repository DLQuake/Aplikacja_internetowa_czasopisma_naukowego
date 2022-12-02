import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditUser = () => {
	const [imie, setImie] = useState("");
	const [nazwisko, setNazwisko] = useState("");
	const [email, setEmail] = useState("");
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [confPassword, setConfPassword] = useState("");
	const [role, setRole] = useState("");
	const [msg, setMsg] = useState("");
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		const getUserById = async () => {
			try {
				const response = await axios.get(`http://localhost:3001/users/${id}`);
				setImie(response.data.imie);
				setNazwisko(response.data.nazwisko);
				setEmail(response.data.email);
				setLogin(response.data.login);
				setRole(response.data.role);
			} catch (error) {
				if (error.response) {
					setMsg(error.response.data.msg);
				}
			}
		};
		getUserById();
	}, [id]);

	const updateUser = async (e) => {
		e.preventDefault();
		try {
			await axios.patch(`http://localhost:3001/users/${id}`, {
				imie: imie,
				nazwisko: nazwisko,
				email: email,
				login: login,
				password: password,
				confPassword: confPassword,
				role: role,
			});
			navigate("/users");
		} catch (error) {
			if (error.response) {
				setMsg(error.response.data.msg);
			}
		}
	};
	return (
		<div>
			<h1 className="title">Użytkownicy</h1>
			<h2 className="subtitle">Zaktualizuj dane użytkownika</h2>
			<div className="card is-shadowless">
				<div className="card-content">
					<div className="content">
						<form onSubmit={updateUser}>
							<p className="has-text-centered">{msg}</p>
							<div className="field">
								<label className="label">Imię</label>
								<div className="control has-icons-left">
									<input type="text" className="input" value={imie} onChange={(e) => setImie(e.target.value)} placeholder="Imie" />
									<span class="icon is-small is-left">
										<i class="fa-solid fa-person"></i>
									</span>
								</div>
							</div>
							<div className="field">
								<label className="label">Nazwisko</label>
								<div className="control has-icons-left">
									<input type="text" className="input" value={nazwisko} onChange={(e) => setNazwisko(e.target.value)} placeholder="Nazwisko" />
									<span class="icon is-small is-left">
										<i class="fa-solid fa-person"></i>
									</span>
								</div>
							</div>
							<div className="field">
								<label className="label">Email</label>
								<div className="control has-icons-left">
									<input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
									<span class="icon is-small is-left">
										<i class="fa-solid fa-envelope"></i>
									</span>
								</div>
							</div>
							<div className="field">
								<label className="label">Login</label>
								<div className="control has-icons-left">
									<input type="text" className="input" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Login" />
									<span class="icon is-small is-left">
										<i class="fa-solid fa-user"></i>
									</span>
								</div>
							</div>
							<div className="field">
								<label className="label">Hasło</label>
								<div className="control has-icons-left">
									<input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="******" />
									<span class="icon is-small is-left">
										<i class="fa-solid fa-lock"></i>
									</span>
								</div>
							</div>
							<div className="field">
								<label className="label">Potwierdź hasło</label>
								<div className="control has-icons-left">
									<input type="password" className="input" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} placeholder="******" />
									<span class="icon is-small is-left">
										<i class="fa-solid fa-lock"></i>
									</span>
								</div>
							</div>
							<div className="field">
								<label className="label">Rola</label>
								<div className="control has-icons-left">
									<div className="select is-fullwidth">
										<select value={role} onChange={(e) => setRole(e.target.value)} >
											<option>Wybierz Role</option>
											<option value="redakor">Redaktor</option>
											<option value="recenzent">Recenzent</option>
											<option value="autor">Autor</option>
										</select>
									</div>
									<span class="icon is-small is-left">
										<i class="fa-solid fa-square-check"></i>
									</span>
								</div>
							</div>
							<div className="field">
								<div className="control">
									<button type="submit" className="button is-success">Zaktualizuj zmiany</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormEditUser;
