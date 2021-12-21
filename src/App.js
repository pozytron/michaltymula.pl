import './App.css';
import {initialData} from "./mocks/roadmap";
import {useState} from "react";
import {Roadmap} from "./sections/Roadmap";


function App() {
	const [data, setData] = useState(initialData);
	const handleDataUpdate = () => {
		setData(initialData.children[0])
	}
	return (
		<div className="App">
			<header className="App-header">
				Hello from pozytron {initialData.name}
			</header>
			<Roadmap data={data} onUpdate={handleDataUpdate}/>
		</div>
	);
}

export default App;
