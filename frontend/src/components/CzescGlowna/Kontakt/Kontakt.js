import Header from "../Header/Header";
import "./Kontakt.css";

function ONas() {
    return (
        <div className="App">
            <Header></Header>
            <main className="c-Kontakt-main">
                <div className="c-Kontakt-main__content">
                    <div className="c-Kontakt-main__content-kontakt">
                        <h1 className="c-Kontakt-main__content-title">KONTAKT</h1>
                        <div className="c-Kontakt-main__content-text">
                            E-mail  - email@email.com
                            <br />
                            numer telefonu: 123456789
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ONas;