import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import NavbarHome from "../components/NavbarHome";

const Kontakt = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ximyohd', 'template_qd00s0n', form.current, 'PYZQAnBlBCWe5HnPD')
            .then((result) => {
                console.log(result.text);
                alert("Wiadomość została wysłana");
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <React.Fragment>
            <NavbarHome />
            <section className="hero is-fullheight has-background-success">
                <div className="hero-body">
                    <div className="container">
                        <form ref={form} onSubmit={sendEmail} className="columns is-centered">
                            <div className="column is-10">
                                <div className="box">
                                    <h1 className="title has-text-centered">KONTAKT</h1>
                                    <h2 className="subtitle has-text-centered">Jeśli są jakieś pytania dotyczące publikacji, proszę napisać wiadomość poprzez poniższy formularz</h2>
                                    <div className="field">
                                        <label className="label">Imię i nazwisko</label>
                                        <div className="control has-icons-left">
                                            <input type="text" className="input" name="user_name" placeholder="Imię i nazwisko" />
                                            <span class="icon is-small is-left">
                                                <i class="fa-solid fa-user"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">E-mail</label>
                                        <div className="control has-icons-left">
                                            <input type="email" className="input" name="user_email" placeholder="E-mail" />
                                            <span class="icon is-small is-left">
                                                <i class="fa-solid fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Temat</label>
                                        <div className="control has-icons-left">
                                            <input type="text" className="input" name="subject" placeholder="Temat" />
                                            <span class="icon is-small is-left">
                                                <i class="fa-solid fa-message"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Wiadomość</label>
                                        <div class="control">
                                            <textarea class="textarea" rows="10" name="message" placeholder="Treść wiadomości..."></textarea>
                                        </div>
                                    </div>
                                    <div className="field mt-5 is-grouped is-grouped-centered">
                                        <button type="submit" className="button is-success p-5">Wyślij wiadomość</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Kontakt;
