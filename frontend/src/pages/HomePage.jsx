import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarHome from "../components/NavbarHome";

const Publikacja = () => {
    const [publikacje, setPublikacje] = useState([]);

    useEffect(() => {
        ShowPublicationsOnHomePage();
    }, []);

    const ShowPublicationsOnHomePage = async () => {
        const response = await axios.get("http://localhost:3001/allpublications");
        setPublikacje(response.data);
    };
    return (
        <React.Fragment>
            <NavbarHome />
            <section className="section has-background-success">
                <div className="columns is-multiline">
                    {publikacje.map((publikacje) => (
                        <Link to={`/publikacja/${publikacje.uuid}`} className="column has-text-dark is-one-quarter">
                            <p className="notification has-background-white has-text-centered">
                                <div className="title">{publikacje.tytul}</div>
                                <div className="subtitle">Autor artykułu: {publikacje.user.imie} {publikacje.user.nazwisko}</div>
                                <div className="text has-text-justified">{publikacje.opis}</div>
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </React.Fragment>
    );
};

export default Publikacja;
