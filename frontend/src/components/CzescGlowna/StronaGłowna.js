import { Link } from "react-router-dom";

function StronaGłowna() {
    return (
        <div className="App">
            <div className="StronaGłowna">
                <div className="StronaGłowna-nagłówek">
                    <h1>Strona główna</h1>
                </div>
                <div className="StronaGłowna-treść">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque euismod, nisi eu consectetur consectetur,
                        nisi nisl consectetur nisi, eu consectetur nisi nisl
                        consectetur nisi.
                    </p>
                </div>

                <div className="StronaGłowna-nawigacja">
                    <ul>
                        <li>
                            <Link to="/">Strona główna</Link>
                        </li>
                        <li>
                            <Link to="/o-nas">O nas</Link>
                        </li>
                        <li>
                            <Link to="/kontakt">Kontakt</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default StronaGłowna;