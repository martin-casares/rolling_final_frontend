import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<h1>Home Page</h1>} />
				{/* 	<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
