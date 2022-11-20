import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const PubliakcjeList = () => {
	const [products, setProducts] = useState([]);
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {
		const response = await axios.get("http://localhost:3001/publikacje");
		setProducts(response.data);
	};

	const deleteProduct = async (productId) => {
		await axios.delete(`http://localhost:3001/publikacje/${productId}`);
		getProducts();
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
						<th>Stworzone przez</th>
						<th>Opcje</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product, index) => (
						<tr key={product.uuid}>
							<td>{index + 1}</td>
							<td>{product.tytul}</td>
							<td>{product.tytul}</td>
							<td>{product.opis}</td>
							<td>{product.user.login}</td>
							<td>
								<Link to={`/products/edit/${product.uuid}`} className="button is-small is-info">Edit</Link>
								<button onClick={() => deleteProduct(product.uuid)} className="button is-small is-danger">Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PubliakcjeList;
