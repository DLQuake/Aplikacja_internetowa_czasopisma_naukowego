import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const PubliakcjeList = () => {
	const [publikacje, setPublikacje] = useState([]);
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		getPublikacje();
	}, []);

	const getPublikacje = async () => {
		const response = await axios.get("http://localhost:3001/publications");
		setPublikacje(response.data);
	};

	const deletePublikacje = async (publikacjeId) => {
		await axios.delete(`http://localhost:3001/publications/${publikacjeId}`);
		getPublikacje();
	};

	return (
		<div>
			<h1 className="title">Publikacje</h1>
			<h2 className="subtitle">Lista publikacji</h2>
			{user && user.role === "autor" && (
				<Link to="/publikacje/add" className="button is-primary mb-2">
					Dodaj nową publikacje
				</Link>
			)}
			<table className="table is-striped is-fullwidth">
				<thead>
					<tr>
						<th>ID</th>
						<th>Status</th>
						<th>Tytuł publikacji</th>
						<th>Opis publikacji</th>
						<th>Plik</th>
						<th>Stworzone przez</th>
						<th>Uwagi</th>
						<th>Opcje</th>
					</tr>
				</thead>
				<tbody>
					{publikacje.map((publikacje, index) => (
						<tr key={publikacje.uuid}>
							<td>{index + 1}</td>
							<td>{publikacje.status}</td>
							<td>{publikacje.tytul}</td>
							<td>{publikacje.opis}</td>
							<td><a href={publikacje.url}>PLIK</a></td>
							<td>{publikacje.user.login}</td>
							<td>{publikacje.uwagi}</td>
							<td>
								{user && user.role === "autor" && (
									<div className="Option">
										<Link to={`/publikacje/edit/${publikacje.uuid}`} className="button is-small is-info">Edytuj</Link>
										<button onClick={() => deletePublikacje(publikacje.uuid)} className="button is-small is-danger">Usuń</button>
									</div>
								)}
								{user && user.role === "recenzent" && (
									<Link to={`/publikacja/editStatus/${publikacje.uuid}`} className="button is-small is-info">Recenzja publikacji</Link>
								)}
								{user && user.role === "redaktor" && (
									<Link to={`/publikacja/editStatus/${publikacje.uuid}`} className="button is-small is-info">Zredaguj</Link>
								)}
								{user && user.role === "wydawnictwo" && (
									<div className="Option">
										<Link to={`/publikacja/editStatus/${publikacje.uuid}`} className="button is-small is-info">Opublikuj</Link>
										<button onClick={() => deletePublikacje(publikacje.uuid)} className="button is-small is-danger">Usuń</button>
									</div>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PubliakcjeList;
