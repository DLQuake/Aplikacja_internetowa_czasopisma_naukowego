import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import HomePage from "./pages/HomePage";
import ONas from "./pages/ONas";
import InformacjeDlaAutorow from "./pages/InformacjeDlaAutorow";
import Kontakt from "./pages/Kontakt";
import Register from "./components/Register";
import Login from "./components/Login";
import AddPublikacje from "./pages/AddPublikacje";
import Publiakcje from "./pages/Publiakcje";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/o_nas" element={<ONas />} />
					<Route path="/informacje_dla_autorow" element={<InformacjeDlaAutorow />} />
					<Route path="/kontakt" element={<Kontakt />} />
					<Route path="/zaloguj_sie" element={<Login />} />
					<Route path="/zarejestruj_sie" element={<Register />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/users" element={<Users />} />
					<Route path="/users/add" element={<AddUser />} />
					<Route path="/users/edit/:id" element={<EditUser />} />
					<Route path="/publikacje" element={<Publiakcje />} />
					<Route path="/publikacje/add" element={<AddPublikacje />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
