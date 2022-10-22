import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="App">
            <Header></Header>
            <main className="c-HomePage-main">
                <div className="c-HomePage-main__content">
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                    <Link className="c-HomePage-main__content-item" to="#"></Link>
                </div>
            </main>
        </div>
    );
}

export default HomePage;