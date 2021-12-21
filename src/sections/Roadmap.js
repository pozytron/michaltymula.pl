import {TreeChart} from "../components/TreeChart";

export function Roadmap({data, onUpdate}) {

	return (
		<>
			<h2>Following Roadmap</h2>
			<button onClick={()=>onUpdate()}>Update Tree</button>
			<TreeChart data={data} />

		</>
	);
}