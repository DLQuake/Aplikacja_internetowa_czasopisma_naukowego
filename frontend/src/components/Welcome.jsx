import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
	const { user } = useSelector((state) => state.auth);
	return (
		<div>
			<h1 className="title">Panel główny</h1>
			<h2 className="subtitle">
				Witaj użytkowniku <strong>{user && user.imie} {user && user.nazwisko}</strong>
				<br />
				Rola użytkownika: {user && user.role}
			</h2>
		</div>
	);
};

export default Welcome;
