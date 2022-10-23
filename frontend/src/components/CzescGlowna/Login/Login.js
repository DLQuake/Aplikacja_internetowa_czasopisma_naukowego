import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./Login.css";

function ONas() {
    return (
        <div className="App">
            <Header></Header>
            <main className="c-Login-main">
                <div className="c-Login-main__content">
                    <div className="c-Login-main__content-register">
                        <from className="c-Login-main__content-register-form">
                            <h1 className="c-Login-main__content-register-form-title">Zaloguj się do systemu</h1>
                            <input className="c-Login-main__content-register-form-item" type="text" name="login" placeholder="Login" />
                            <input className="c-Login-main__content-register-form-item" type="password" placeholder="Hasło" />
                            <input className="c-Login-main__content-register-form-item c-Login-main__content-register-form--button" value={'Zaloguj się'} type="submit" />

                            <div className="c-Login-main__content-register-form-register">
                                <div className="c-Login-main__content-register-form-register-text">Nie posiadasz konta?</div>
                                <Link className="c-Login-main__content-register-form-register-link" to="/zarejestruj_sie">Zarejestruj się</Link>
                            </div>
                        </from>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ONas;