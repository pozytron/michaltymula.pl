import './App.css';
import {initialData} from "./mocks/roadmap";

function App() {
	return (
		<div className="App">
			<header className="App-header">
					Hello {initialData.name}
			</header>
		</div>
	);
}

export default App;
