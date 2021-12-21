import React from "react";
import Tree from "react-d3-tree";

export function TreeChart({data}) {

	return (
		<>
			<p>TreeChart here...</p>
		<div id="treeWrapper" style={{ width: '100%', height: '100%' }}>
			<Tree
				translate={{x:200,y:20}}
				data={data}
				orientation="vertical"
			/>
		</div>
		</>
	);
}