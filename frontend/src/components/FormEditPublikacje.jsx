import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormEditPublikacje = () => {
    const [status, setStatus] = useState("");
    const [title, setTitle] = useState("");
    const [opis, setOpis] = useState("");
    const [file, setFile] = useState("");
    const [uwagiOdRecenzenta, setUwagiOdRecenzenta] = useState("");
    const [informacjeOdRedaktora, setInformacjeOdRedaktora] = useState("");
    const [odpowiedzOdAutora, setOdpowiedzOdAutora] = useState("");
    const [preview, setPreview] = useState("");
    const [msg, setMsg] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getPublicationById = async () => {
            const response = await axios.get(`http://localhost:3001/publications/${id}`);
            setStatus(response.data.status);
            setTitle(response.data.tytul);
            setOpis(response.data.opis);
            setFile(response.data.plik);
            setUwagiOdRecenzenta(response.data.uwagiOdRecenzenta);
            setInformacjeOdRedaktora(response.data.informacjeOdRedaktora);
            setOdpowiedzOdAutora(response.data.odpowiedzOdAutora);
        };
        getPublicationById();
    }, [id]);


    const LoadDocument = (e) => {
        const document = e.target.files[0];
        setFile(document);
        setPreview(URL.createObjectURL(document));
    };

    const updatePublication = async (e) => {
        alert("Aktualizacja przeszła pomyślnie i publikacja została odesłana do redaktora")
        e.preventDefault();
        const formData = new FormData();
        formData.append("odpowiedzOdAutora", odpowiedzOdAutora);
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
            <h1 className="title">Edytuj artykuł</h1>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <div className="columns">
                            <div className="column">
                                <div className="title">Informacje od Redaktora</div>
                                <textarea class="textarea" rows="7" value={informacjeOdRedaktora} disabled></textarea>
                            </div>
                            <div className="column">
                                <div className="title">Uwagi od Recenzenta</div>
                                <textarea class="textarea" rows="7" value={uwagiOdRecenzenta} disabled></textarea>
                            </div>
                        </div>
                        <form onSubmit={updatePublication}>
                            <p className="has-text-centered">{msg}</p>
                            <div className="field">
                                <label className="label">Tytuł artykułu</label>
                                <div className="control has-icons-left">
                                    <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tytuł artykułu" />
                                    <span className="icon is-small is-left">
                                        <i className="fa-solid fa-file-lines"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Krótki opis artykułu</label>
                                <div className="control">
                                    <textarea className="textarea" rows="10" value={opis} onChange={(e) => setOpis(e.target.value)} placeholder="Treść opisu..."></textarea>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Status artykułu</label>
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
                                <label class="label">Odpowiedź od Autora na uwagi do artykułu</label>
                                <div class="control">
                                    <textarea class="textarea" rows="10" value={odpowiedzOdAutora} onChange={(e) => setOdpowiedzOdAutora(e.target.value)} placeholder="Treść uwag..."></textarea>
                                </div>
                            </div>
                            <div class="file is-medium is-centered">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="resume" onChange={LoadDocument} />
                                    <span class="file-cta">
                                        <span class="file-icon">
                                            <i class="fas fa-upload"></i>
                                        </span>
                                        <span class="file-label">
                                            Dodaj artykuł (np.: artykuł.pdf)
                                        </span>
                                    </span>
                                </label>
                            </div>

                            {preview ? (
                                <object width="100%" height="800" aria-label="preview PDF" data={preview} type="application/pdf"></object>
                            ) : (
                                <div className="has-text-centered">Publikacja: {file}</div>
                            )}


                            <div className="field mt-5 is-grouped is-grouped-centered">
                                <button type="submit" className="button is-success p-5">Zaktualizuj artykuł którą chcesz opublikować</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default FormEditPublikacje;
