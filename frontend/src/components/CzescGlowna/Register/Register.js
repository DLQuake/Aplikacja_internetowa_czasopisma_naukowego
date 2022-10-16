import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Register.css";

function ONas() {
    return (
        <div className="App">
            <Header></Header>
            <main className="main">
                <div className="main__content">
                    <div className="main__content-register">
                        <from className="main__content-register-form">
                            <h1 className="main__content-register-form-title">Zarejestruj się do systemu</h1>
                            <input className="main__content-register-form-item" type="text" placeholder="Imię" />
                            <input className="main__content-register-form-item" type="text" placeholder="Nazwisko" />
                            <input className="main__content-register-form-item" type="text" placeholder="Adres E-mail" />
                            <input className="main__content-register-form-item" type="text" name="login" placeholder="Login" />
                            <input className="main__content-register-form-item" type="password" placeholder="Hasło" />
                            <input className="main__content-register-form-item main__content-register-form--button" value={'Zarejestruj się'} type="submit" />

                            <div className="main__content-register-form-login">
                                <div className="main__content-register-form-login-text">Posiadasz konto?</div>
                                <Link className="main__content-register-form-login-link" to="/zaloguj_sie">Zaloguj się</Link>
                            </div>
                        </from>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ONas;