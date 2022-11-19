import React from "react";
import NavbarHome from "../components/NavbarHome";

const Kontakt = () => {
    return (
        <React.Fragment>
            <NavbarHome />
            <section className="hero is-fullheight has-background-success">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10">
                                <div className="box">
                                    <h1 className="title has-text-centered">KONTAKT</h1>
                                    <h2 className="subtitle has-text-centered">Jęsli są jakieś pytania można napisać wiadomość poprzez poniższy formularz</h2>
                                    <div className="field">
                                        <label className="label">E-mail</label>
                                        <div className="control has-icons-left">
                                            <input type="email" className="input" placeholder="E-mail" />
                                            <span class="icon is-small is-left">
                                                <i class="fa-solid fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Temat</label>
                                        <div className="control has-icons-left">
                                            <input type="text" className="input" placeholder="Temat" />
                                            <span class="icon is-small is-left">
                                                <i class="fa-solid fa-message"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Wiadomość</label>
                                        <div class="control">
                                            <textarea class="textarea" rows="10" placeholder="Treść wiadomości..."></textarea>
                                        </div>
                                    </div>
                                    <div className="field mt-5 is-grouped is-grouped-centered">
                                        <button type="submit" className="button is-success p-5">Wyślij wiadomość</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Kontakt;
