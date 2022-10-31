import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios"
import Header from "../Header/Header";
import "./Login.css";

function Login() {
    const [login, setLogin] = useState("");
    const [haslo, setHaslo] = useState("");

    const login1 = () => {
        Axios.post("http://localhost:3001/auth_login", {
            login: login,
            haslo: haslo,
        }).then((response) => {
            console.log(response.data);
            window.location.href = "/wydawnictwo";
            return response.json();
        });
    };

    return (
        <div className="App">
            <Header></Header>
            <main className="c-Login-main">
                <div className="c-Login-main__content">
                    <div className="c-Login-main__content-register">
                        <form className="c-Login-main__content-register-form" method="POST" action="http://localhost:3001/auth_login">
                            <h1 className="c-Login-main__content-register-form-title">Zaloguj się do systemu</h1>
                            <input className="c-Login-main__content-register-form-item" type="text" name="login" placeholder="Login" value={login} onChange={(e) => {setLogin(e.target.value);}} />
                            <input className="c-Login-main__content-register-form-item" type="password" placeholder="Hasło" value={haslo} onChange={(e) => {setHaslo(e.target.value);}}/>
                            <input className="c-Login-main__content-register-form-item c-Login-main__content-register-form--button" value={'Zaloguj się'} onClick={login1} type="submit" />

                            <div className="c-Login-main__content-register-form-register">
                                <div className="c-Login-main__content-register-form-register-text">Nie posiadasz konta?</div>
                                <Link className="c-Login-main__content-register-form-register-link" to="/zarejestruj_sie">Zarejestruj się</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login;