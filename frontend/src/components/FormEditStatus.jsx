import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const FormEditStatus = () => {
    const [status, setStatus] = useState("");
    const [title, setTitle] = useState("");
    const [opis, setOpis] = useState("");
    const [file, setFile] = useState("");
    const [uwagiOdRecenzenta, setUwagiOdRecenzenta] = useState("");
    const [informacjeOdRedaktora, setInformacjeOdRedaktora] = useState("");
    const [msg, setMsg] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        const getPublicationById = async () => {
            const response = await axios.get(`http://localhost:3001/publications/${id}`);
            setStatus(response.data.status);
            setTitle(response.data.tytul);
            setOpis(response.data.opis);
            setFile(response.data.plik);
            setUwagiOdRecenzenta(response.data.uwagiOdRecenzenta);
            setInformacjeOdRedaktora(response.data.informacjeOdRedaktora);
        };
        getPublicationById();
    }, [id]);

    const updatePublication = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("informacjeOdRedaktora", informacjeOdRedaktora);
        formData.append("uwagiOdRecenzenta", uwagiOdRecenzenta);
        formData.append("file", file);
        formData.append("opis", opis);
        formData.append("title", title);
        formData.append("status", status);
        try {
            await axios.patch(`http://localhost:3001/publications/${id}`, formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            });
            navigate("/publikacje");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
        <div>
            {user && user.role === "recenzent" && (
                <h1 className="title">Recenzuj publikacje - {title}</h1>
            )}
            {user && user.role === "redaktor" && (
                <h1 className="title">Zredaguj publikacje - {title}</h1>
            )}
            {user && user.role === "wydawnictwo" && (
                <h1 className="title">Opublikowanie publikacji - {title}</h1>
            )}
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={updatePublication}>
                            <p className="has-text-centered">{msg}</p>
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

                            {user && user.role === "recenzent" && (
                                <div>
                                    <div className="field">
                                        <label className="label">Status Publikacji</label>
                                        <div className="control has-icons-left">
                                            <div className="select is-fullwidth">
                                                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                                    <option>Wybierz Status</option>
                                                    <option value="Wysłany do redaktora">Wysłany do redaktora</option>
                                                </select>
                                            </div>
                                            <span class="icon is-small is-left">
                                                <i class="fa-solid fa-square-check"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Uwagi dotyczące publikacji</label>
                                        <div class="control">
                                            <textarea class="textarea" rows="10" value={uwagiOdRecenzenta} onChange={(e) => setUwagiOdRecenzenta(e.target.value)} placeholder="Treść uwag..."></textarea>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {user && user.role === "redaktor" && (
                                <div>
                                    <div className="field">
                                        <label className="label">Status Publikacji</label>
                                        <div className="control has-icons-left">
                                            <div className="select is-fullwidth">
                                                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                                    <option>Wybierz Status</option>
                                                    <option value="Do publikacji">Do publikacji</option>
                                                    <option value="Wysłany do recenzji">Wysłany do recenzji</option>
                                                    <option value="Możliwość publikacji pod warunkiem">Możliwość publikacji pod warunkiem</option>
                                                    <option value="Brak zgody na opublikowanie">Brak zgody na opublikowanie</option>
                                                </select>
                                            </div>
                                            <span class="icon is-small is-left">
                                                <i class="fa-solid fa-square-check"></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Uwagi od Recenzenta dotyczące publikacji</label>
                                        <div class="control">
                                            <textarea class="textarea" rows="10" value={uwagiOdRecenzenta} disabled></textarea>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Informacje od Redaktora</label>
                                        <div class="control">
                                            <textarea class="textarea" rows="10" value={informacjeOdRedaktora} onChange={(e) => setInformacjeOdRedaktora(e.target.value)} placeholder="Treść uwag..."></textarea>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {user && user.role === "wydawnictwo" && (
                                <div className="field">
                                    <label className="label">Status Publikacji</label>
                                    <div className="control has-icons-left">
                                        <div className="select is-fullwidth">
                                            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                                                <option>Wybierz Status</option>
                                                <option value="Opublikowany">Opublikuj</option>
                                            </select>
                                        </div>
                                        <span class="icon is-small is-left">
                                            <i class="fa-solid fa-square-check"></i>
                                        </span>
                                    </div>
                                </div>
                            )}

                            <div className="field mt-5 is-grouped is-grouped-centered">
                                <button type="submit" className="button is-success p-5">Zaktualizuj status</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default FormEditStatus;
