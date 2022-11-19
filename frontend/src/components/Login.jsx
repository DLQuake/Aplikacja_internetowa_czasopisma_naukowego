import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import NavbarHome from "./NavbarHome";

const Login = () => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user, isError, isSuccess, isLoading, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (user || isSuccess) {
			navigate("/dashboard");
		}
		dispatch(reset());
	}, [user, isSuccess, dispatch, navigate]);

	const Auth = (e) => {
		e.preventDefault();
		dispatch(LoginUser({ login, password }));
	};

	return (
		<div>
			<NavbarHome></NavbarHome>
			<section className="hero is-fullheight is-fullwidth has-background-success">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-centered">
							<div className="column is-4">
								<form onSubmit={Auth} className="box">
									{isError && <p className="has-text-centered">{message}</p>}
									<h1 className="title is-2">Logowanie do systemu</h1>
									<div className="field">
										<label className="label">Login</label>
										<div className="control has-icons-left">
											<input type="text" className="input" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Login" />
											<span class="icon is-small is-left">
												<i class="fas fa-user"></i>
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
									<div className="field mt-5">
										<button type="submit" className="button is-success is-fullwidth" >
											{isLoading ? "Loading..." : "Zaloguj się"}
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Login;
