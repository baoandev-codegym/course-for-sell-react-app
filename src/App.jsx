import { Provider } from "react-redux";
import { store } from "./app/store";
import AppRoutes from "./router/AppRoutes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
