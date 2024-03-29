import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from 'moment';

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
			<h1 className="title">Artykuły</h1>
			<h2 className="subtitle">Lista artykułów</h2>
			{user && user.role === "autor" && (
				<Link to="/publikacje/add" className="button is-primary mb-2">Dodaj nowy artykuł</Link>
			)}
			<table className="table is-striped is-fullwidth">
				<thead>
					<tr>
						<th>ID</th>
						<th>Status</th>
						<th>Data aktualizacji</th>
						<th>Tytuł artykułu</th>
						<th>Opis artykułu</th>
						<th>Plik</th>
						<th>Stworzone przez</th>
						<th>
							{user && user.role !== "wydawnictwo" && (
								<div>
									Uwagi i Informacje
								</div>
							)}
						</th>
						<th>Opcje</th>
					</tr>
				</thead>
				<tbody>
					{publikacje.map((publikacje, index) => (
						<tr key={publikacje.uuid}>
							<td>{index + 1}</td>
							<td>{publikacje.status}</td>
							<td>{moment(publikacje.updatedAt).format("DD.MM.YYYY HH:mm:ss")}</td>
							<td>{publikacje.tytul}</td>
							<td>{publikacje.opis}</td>
							<td><a href={publikacje.url}>PLIK</a></td>
							<td>{publikacje.user.login}</td>
							<td>
								{user && user.role !== "wydawnictwo" && (
									<Link to={`/publikacje/uwagi/${publikacje.uuid}`} className="button is-small is-info">Zobacz uwagi i informacje</Link>
								)}
							</td>
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
										{publikacje.status === "Opublikowany"&& (
											<button onClick={() => deletePublikacje(publikacje.uuid)} className="button is-small is-danger">Usuń</button>
										)}
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
