import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NavbarHome from "../components/NavbarHome";

const HomePage = () => {
    const [publikacje, setPublikacje] = useState([]);

    useEffect(() => {
        getPublikacje();
    }, []);

    const getPublikacje = async () => {
        const response = await axios.get("http://localhost:3001/allpublications");
        setPublikacje(response.data);
    };
    return (
        <React.Fragment>
            <NavbarHome />
            <section className="section has-background-success">
                <div className="columns">
                    {publikacje.map((publikacje) => (
                        <a href="/#" className="column has-text-dark is-one-quarter" key={publikacje.uuid}>
                            <p className="notification has-background-white has-text-centered">
                                <div>{publikacje.tytul}</div>
                                <div><a href={publikacje.url}>PLIK</a></div>
                            </p>
                        </a>
                    ))}
                </div>
            </section>
        </React.Fragment>
    );
};

export default HomePage;
