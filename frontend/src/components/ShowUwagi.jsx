import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ShowUwagi = () => {
    const [status, setStatus] = useState("");
    const [title, setTitle] = useState("");
    const [opis, setOpis] = useState("");
    const [uwagi, setUwagi] = useState("");
    const { id } = useParams();

    useEffect(() => {
        const getPublicationById = async () => {
            const response = await axios.get(`http://localhost:3001/publications/${id}`);
            setStatus(response.data.status);
            setTitle(response.data.tytul);
            setOpis(response.data.opis);
            setUwagi(response.data.uwagi);
        };
        getPublicationById();
    }, [id]);

    return (
        <div>
            <h1 className="title">Publikacja - {title}</h1>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <div className="columns">
                            <div className="column">
                                <strong>Tytuł publikacji:</strong>
                                <p>{title}</p>
                            </div>
                            <div className="column">
                                <strong>Opis publikacji:</strong>
                                <p>{opis}</p>
                            </div>
                            <div className="column">
                                <strong>Aktualny status:</strong>
                                <p>{status}</p>
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">
                                <div className="title">Uwagi od Recenzenta</div>
                                <textarea class="textarea" rows="22" value={uwagi} disabled></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowUwagi;
