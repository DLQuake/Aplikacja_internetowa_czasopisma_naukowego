import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./HomePage.css";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:3001/test")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <Header></Header>
                <main className="c-HomePage-main">
                    <p>{this.state.apiResponse}</p>
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
}

export default HomePage;