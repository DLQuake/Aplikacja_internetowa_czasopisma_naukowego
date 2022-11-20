import React from "react";

const FormAddPublikacje = () => {
    const fileInput = document.querySelector('#file-js-example input[type=file]');
    onchange = () => {
        if (fileInput.files.length > 0) {
        const fileName = document.querySelector('#file-js-example .file-name');
        fileName.textContent = fileInput.files[0].name;
        }
    }

    return (
        <div>
            <h1 className="title">Użytkownicy</h1>
            <h2 className="subtitle">Dodaj nowego użytkownika</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form>
                            <div className="field">
                                <label className="label">Tytuł publikacji</label>
                                <div className="control has-icons-left">
                                    <input type="text" className="input" placeholder="Tytuł publikacji" />
                                    <span className="icon is-small is-left">
                                        <i className="fa-solid fa-file-lines"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Krótki opis publikacji</label>
                                <div className="control">
                                    <textarea className="textarea" rows="10" placeholder="Treść opisu..."></textarea>
                                </div>
                            </div>
                            <div id="file-js-example" class="file has-name is-fullwidth">
                                <label class="file-label">
                                    <input class="file-input" type="file" name="resume" />
                                        <span class="file-cta">
                                            <span class="file-icon">
                                                <i class="fas fa-upload"></i>
                                            </span>
                                            <span class="file-label">
                                                Dodaj plik (np.: publikacja.pdf)
                                            </span>
                                        </span>
                                        <span class="file-name">
                                            Brak załączonego pliku
                                        </span>
                                </label>
                            </div>
                            <div className="field mt-5 is-grouped is-grouped-centered">
                                <button type="submit" className="button is-success p-5">Wyślij do recenzenta</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormAddPublikacje;
