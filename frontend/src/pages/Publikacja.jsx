import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import NavbarHome from "../components/NavbarHome";

const Publikacja = () => {
    const [title, setTitle] = useState("");
    const [opis, setOpis] = useState("");
    const [url, setUrl] = useState("");
    const [user, setUser] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const ShowPublicationsOnHomePageById = async () => {
            const response = await axios.get(`http://localhost:3001/allpublications/${id}`);
            setTitle(response.data.tytul);
            setOpis(response.data.opis);
            setUrl(response.data.url);
            setUser(response.data.user);
        };
        ShowPublicationsOnHomePageById();
    }, [id]);

    return (
        <React.Fragment>
            <NavbarHome />
            <section className="section has-background-success">
                <div className="columns">
                    <div className="column has-text-dark">
                        <p className="notification has-background-white has-text-centered">
                            <div className="title">Publiakcja: {title}</div>
                            <div className="subtitle">Autor publikacji: {user.imie} {user.nazwisko}</div>
                            <div className="subtitle has-text-justified">{opis}</div>
                            <iframe src={url} width="100%" height="1190px" title="Publication" frameborder="0"></iframe>
                        </p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Publikacja;
