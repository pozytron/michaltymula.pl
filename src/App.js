import './App.css';
import {initialData} from "./mocks/roadmap";
import {useState} from "react";
import {Roadmap} from "./sections/Roadmap";


function App() {
	const [data, setData] = useState(initialData);
	const handleDataSave = () => {
		// saves the data...
	}
	return (
		<div className="App" id="treeWrapper" style={{ width: '50em', height: '20em' }}>
			<header className="App-header">
				Hello from pozytron {initialData.name}
			</header>
			<Roadmap data={data} onSave={handleDataSave}/>
		</div>
	);
}

export default App;
