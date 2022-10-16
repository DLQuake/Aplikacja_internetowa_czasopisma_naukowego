import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="App">
            <Header></Header>
            <main className="main">
                <div className="main__content">
                    <Link className="main__content-item" to="#"></Link>
                    <Link className="main__content-item" to="#"></Link>
                    <Link className="main__content-item" to="#"></Link>
                    <Link className="main__content-item" to="#"></Link>
                    <Link className="main__content-item" to="#"></Link>
                    <Link className="main__content-item" to="#"></Link>
                    <Link className="main__content-item" to="#"></Link>
                    <Link className="main__content-item" to="#"></Link>
                    <Link className="main__content-item" to="#"></Link>
                    <Link className="main__content-item" to="#"></Link>
                    <Link className="main__content-item" to="#"></Link>
                    <Link className="main__content-item" to="#"></Link>
                    <Link className="main__content-item" to="#"></Link>
                    <Link className="main__content-item" to="#"></Link>
                    <Link className="main__content-item" to="#"></Link>
                    <Link className="main__content-item" to="#"></Link>
                </div>
            </main>
        </div>
    );
}

export default HomePage;