const example = {
	name: "example",
	attributes: {name: "value"},
	children: []
}
const createTier = (number, children) => ({
	name: "TIER-" + number,
	attributes: {},
	children: [...children]
})

const computerSkillsNode = {
	name: "www",
	attributes: {},
	children: [
		{
			name: "http&https",
			attributes: {},
			children: []
		},
		{
			name: "xss",
			attributes: {},
			children: []
		},
		{
			name: "domain",
			attributes: {},
			children: []
		},
		{
			name: "hosting",
			attributes: {},
			children: []
		}
	]
}
const languageNode = {
	name: "language",
	attributes: {},
	children: [
		{
			name: "HTML",
			attributes: {},
			children: []
		},
		{
			name: "CSS",
			attributes: {},
			children: []
		},
		{
			name: "JavaScript",
			attributes: {},
			children: []
		},
		{
			name: "TypeScript",
			attributes: {},
			children: []
		}
	]
}

const vcsNode = {
	name: "VCS",
	attributes: {},
	children: [{
		name: "CI",
		attributes: {},
		children: []
	}, {
		name: "CD",
		attributes: {},
		children: []
	}]
}

export const initialData = {
	name: 'Start',
	children: [
		createTier(1, [
				computerSkillsNode,
			createTier("proof of progress",[
				createTier(2, [
					vcsNode,
					createTier(3, [
						createTier(4, [
							{
								name: 'Foreman',
								attributes: {
									department: 'Assembly',
								},
								children: [
									{
										name: 'Worker',
									},
								],
							},
							createTier(5, [
								{
									name: 'Foreman',
									attributes: {
										department: 'Fabrication',
									},
									children: [
										{
											name: 'Worker',
										},
									],
								},
							]),
						]),
					]),
					example,
				]),
			]),
				languageNode,

		]),


	],
};