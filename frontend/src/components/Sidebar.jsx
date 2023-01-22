import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoLibrary, IoHome, IoLogOut, IoAddOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);

	const logout = () => {
		dispatch(LogOut());
		dispatch(reset());
		navigate("/");
	};

	return (
		<div>
			<aside className="menu pl-2 has-shadow">
				<p className="menu-label">Główne</p>
				<ul className="menu-list">
					<li>
						<NavLink to={"/dashboard"}>
							<IoHome /> Paneł główny
						</NavLink>
					</li>
					<li>
						<NavLink to={"/publikacje"}>
							<IoLibrary /> Artykuły
						</NavLink>
					</li>
				</ul>
				{user && user.role === "wydawnictwo" && (
					<div>
						<p className="menu-label">Admin</p>
						<ul className="menu-list">
							<li>
								<NavLink to={"/users"}>
									<IoPerson /> Użytkownicy
								</NavLink>
							</li>
						</ul>
					</div>
				)}
				{user && user.role === "autor" && (
					<div>
						<p className="menu-label">Autor</p>
						<ul className="menu-list">
							<li>
								<NavLink to={"/publikacje/add"}>
									<IoAddOutline /> Dodaj nowy artykuł
								</NavLink>
							</li>
						</ul>
					</div>
				)}

				<p className="menu-label">Opcje</p>
				<ul className="menu-list">
					<li>
						<button onClick={logout} className="button is-white">
							<IoLogOut /> Wyloguj się
						</button>
					</li>
				</ul>
			</aside>
		</div>
	);
};

export default Sidebar;
