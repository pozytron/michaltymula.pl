import {TreeChart} from "../components/TreeChart";

export function Roadmap({data, onSave}) {

	return (
		<section style={{width:"100%",height:"100vh"}}>
			<h2>Following Roadmap</h2>
			<button onClick={()=>onSave()}>Save Tree</button>
			<TreeChart data={data} />
		</section>
	);
}