import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormEditPublikacje = () => {
    const [title, setTitle] = useState("");
    const [opis, setOpis] = useState("");
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const [msg, setMsg] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getPublicationById = async () => {
            const response = await axios.get(`http://localhost:3001/publications/${id}`);
            setTitle(response.data.tytul);
            setOpis(response.data.opis);
            setFile(response.data.plik);
        };
        getPublicationById();
    }, [id]);


    const LoadDocument = (e) => {
        const document = e.target.files[0];
        setFile(document);
        setPreview(URL.createObjectURL(document));
    };

    const updatePublication = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("opis", opis);
        formData.append("title", title);
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
            <h1 className="title">Edytuj publikacje</h1>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={updatePublication}>
                            <p className="has-text-centered">{msg}</p>
                            <div className="field">
                                <label className="label">Tytuł publikacji</label>
                                <div className="control has-icons-left">
                                    <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Tytuł publikacji" />
                                    <span className="icon is-small is-left">
                                        <i className="fa-solid fa-file-lines"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Krótki opis publikacji</label>
                                <div className="control">
                                    <textarea className="textarea" rows="10" value={opis} onChange={(e) => setOpis(e.target.value)} placeholder="Treść opisu..."></textarea>
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
                                                Dodaj publikacje (np.: publikacja.pdf)
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
                                <button type="submit" className="button is-success p-5">Wyślij do recenzenta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default FormEditPublikacje;