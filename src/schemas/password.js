export default {
	name: 'Password',
	slug: 'password',
	ui: ['label','username', 'password', 'tags'],
	fields: [
		{
			label: 'Label',
			name:'label',
			type: 'text',
			required: true
		},
		{
			label: 'Username',
			name: 'username',
			type: 'text',
			required: true
		},
		{
			label: 'Password',
			name: 'password',
			type: 'text',
			required: true
		},
		{
			label: 'Allowed users',
			name: 'allowed-users',
			type: 'reference',
			referenceModel: 'user',
			referenceSearchLabel: 'username',
			required: true
		},
		{
			label: 'Tags',
			name: 'tags',
			type: 'tags',
			required: true
		},
		{
			label: 'Repeater test',
			name: 'repeater-test',
			type: 'repeater',
			required: true,
			fields: [
				{
					label: 'Title',
					name: 'title',
					type: 'text',
					required: true,
				},
				{
					label: 'Type',
					name: 'type',
					type: 'select',
					values: ['Website', 'Server', 'Other'],
					required: true
				}
			]
		}
	]
};