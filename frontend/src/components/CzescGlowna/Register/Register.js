import { useState } from "react";
import Axios from "axios"
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Register.css";

function Register() {
    const [imie, setImie] = useState("");
    const [nazwisko, setNazwisko] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [haslo, setHaslo] = useState("");
    const [chaslo, setChaslo] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/auth_register", {
            imie: imie,
            nazwisko: nazwisko,
            email: email,
            login: login,
            haslo: haslo,
            chaslo: chaslo,
        }).then((response) => {
            console.log(response);
            return response.json();
        });
    };

    return (
        <div className="App">
            <Header></Header>
            <main className="c-Register-main">
                <div className="c-Register-main__content">
                    <div className="c-Register-main__content-register">
                        <from className="c-Register-main__content-register-form">
                            <h1 className="c-Register-main__content-register-form-title">Zarejestruj się do systemu</h1>
                            <input className="c-Register-main__content-register-form-item" type="text" placeholder="Imię" value={imie} onChange={(e) => {setImie(e.target.value);}}/>
                            <input className="c-Register-main__content-register-form-item" type="text" placeholder="Nazwisko" value={nazwisko} onChange={(e) => {setNazwisko(e.target.value);}}/>
                            <input className="c-Register-main__content-register-form-item" type="text" placeholder="Adres E-mail" value={email} onChange={(e) => {setEmail(e.target.value);}}/>
                            <input className="c-Register-main__content-register-form-item" type="text" name="login" placeholder="Login" value={login} onChange={(e) => {setLogin(e.target.value);}}/>
                            <input className="c-Register-main__content-register-form-item" type="password" placeholder="Hasło" value={haslo} onChange={(e) => {setHaslo(e.target.value);}}/>
                            <input className="c-Register-main__content-register-form-item" type="password" placeholder="Powtórz hasło" value={chaslo} onChange={(e) => {setChaslo(e.target.value);}}/>
                            <input className="c-Register-main__content-register-form-item c-Register-main__content-register-form--button" value={'Zarejestruj się'} onClick={register} type="submit" />

                            <div className="c-Register-main__content-register-form-login">
                                <div className="c-Register-main__content-register-form-login-text">Posiadasz konto?</div>
                                <Link className="c-Register-main__content-register-form-login-link" to="/zaloguj_sie">Zaloguj się</Link>
                            </div>
                        </from>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Register;